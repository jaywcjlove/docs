import path, { dirname } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

;(async () => {
  const require = createRequire(import.meta.url);
  /** @type {import('./data.json')}*/
  const data = require('./data.json').sort((a, b) => {
    if (a.port < b.port) return -1;
    if (a.port > b.port) return 1;
    return 0;
  })
  const nginxContent = [];
  const nginxPath = path.resolve(__dirname, '../nginx/web.conf');
  const actionsContent = [];
  const composeContent = ["version: '3'", 'services:'];
  const composePath = path.resolve(__dirname, '../docker-compose.yml');
  const homeTableContent = ['Docker Image | Port/Github | Version | Image Size | Docker Pull', '---- | ---- | ---- | ---- | ----'];
  homeTableContent.push('[@wcjiang/docs](https://hub.docker.com/r/wcjiang/docs) | - | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/docs)](https://hub.docker.com/r/wcjiang/docs) | ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/docs) | ![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/docs)');
  const homeShellContent = ['```bash', 'docker run --name docs \\']

  await Promise.all(data.map(async (dt) => {
    const root = path.resolve(__dirname, `../${dt.name}`);
    const readmePath = path.resolve(root, 'README.md');
    await fs.writeFile(readmePath, getReadmeContent(dt));
    console.log(`Create:\x1b[35m ${readmePath}\x1b[0m`);
  }));

  data.forEach((dt) => {
    nginxContent.push(getNginxContent(dt));
    composeContent.push(getComposeContent(dt));
    homeTableContent.push(getHomeTableContent(dt));
    homeShellContent.push(`  -p ${dt.port}:80 \\`);
    actionsContent.push(getActionsContent(dt));
  })

  await fs.writeFile(nginxPath, nginxContent.join('\n'));
  console.log(`Create Nginx:\x1b[35m ${nginxPath}\x1b[0m`);
  await fs.writeFile(composePath, composeContent.join('\n'));
  console.log(`Create Docker Compose:\x1b[35m ${composePath}\x1b[0m`);

  const homeReadmePath = path.resolve(__dirname, '../README.md');
  let content = await fs.readFile(homeReadmePath);
  homeTableContent.unshift('<!--DO_NOT_DELETE_TABLE_START-->');
  homeTableContent.push('<!--DO_NOT_DELETE_TABLE_END-->');
  homeShellContent.unshift('<!--DO_NOT_DELETE_SHELL_START-->');
  homeShellContent.push('  --restart=always \\');
  homeShellContent.push('  -d wcjiang/docs:latest');
  homeShellContent.push('```');
  homeShellContent.push('<!--DO_NOT_DELETE_SHELL_END-->');
  content = content.toString()
    .replace(/<!--DO_NOT_DELETE_TABLE_START-->([\s\S]*)<!--DO_NOT_DELETE_TABLE_END-->/g, homeTableContent.join('\n'))
    .replace(/<!--DO_NOT_DELETE_SHELL_START-->([\s\S]*)<!--DO_NOT_DELETE_SHELL_END-->/g, homeShellContent.join('\n'));
  await fs.writeFile(homeReadmePath, content);
  console.log(`Update README.md:\x1b[35m ${homeReadmePath}\x1b[0m`);

  const actionsPath = path.resolve(__dirname, '../.github/workflows/ci.yml');
  actionsContent.unshift('# DO_NOT_DELETE_START');
  actionsContent.push('      # DO_NOT_DELETE_END');
  content = await fs.readFile(actionsPath);
  content = content.toString()
    .replace(/# DO_NOT_DELETE_START([\s\S]*)# DO_NOT_DELETE_END/g, actionsContent.join('\n'))
  await fs.writeFile(actionsPath, content);
  console.log(`Update Actions:\x1b[35m ${actionsPath}\x1b[0m`);

})();


function getReadmeContent({ name, port, website, github } = {}) {
  const result = [];
  result.push(name);
  result.push('\n---\n\n');
  result.push(`[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/${name})](https://hub.docker.com/r/wcjiang/${name}) ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/${name}) ![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/${name})\n\n`);
  result.push(`> Port: \`${port}\` - [${name}](${website})  - [Github](${github})\n\n`);
  result.push('```shell\n');
  result.push(`$ docker pull wcjiang/${name}:latest\n`);
  result.push('```\n\n');
  result.push('Run Server\n\n');
  result.push('```shell\n');
  result.push(`$ docker run --name ${name} -p ${port}:80 --restart=always -d wcjiang/${name}:latest\n`);
  result.push('```\n');
  return result.join('');
}

function getNginxContent({ name, port } = {}) {
  const result = [];
  result.push('server {\n');
  result.push(`  listen ${port};\n`);
  result.push(`  root /usr/share/nginx/web/${name};\n`);
  result.push('  location / {\n');
  result.push('      try_files $uri $uri/ /index.html =404;\n');
  result.push('  }\n');
  result.push('}\n');
  return result.join('');
}

function getComposeContent({ name, port } = {}) {
  const result = [];
  result.push(`  ${name}:`);
  result.push(`    image: wcjiang/${name}:latest`);
  result.push(`    ports:`);
  result.push(`      - ${port}:80\n`);
  return result.join('\n');
}

function getHomeTableContent({ name, port, github } = {}) {
  const result = [];
  result.push(`[@wcjiang/${name}](https://hub.docker.com/r/wcjiang/${name}) | ${port}/[Github](${github}) | [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/${name})](https://hub.docker.com/r/wcjiang/${name}) | ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/${name}) | ![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/${name})`);
  return result.join('\n');
}

function getActionsContent({ name } = {}) {
  const result = [];
  result.push(`      - name: Build ${name} image`);
  result.push(`        working-directory: ./${name}`);
  result.push(`        run: docker build -t ${name} .\n`);
  result.push(`      - name: Tags & Push ${name}`);
  result.push(`        run: |`);
  result.push(`          # Strip git ref prefix from version`);
  result.push('          VERSION=\$\(echo "\$\{\{ github.ref \}\}" | sed -e \'s,.*/\\(.*\\),\\1,\')');
  result.push(`          # Strip "v" prefix from tag name`);
  result.push(`          [[ "$\{\{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')`);
  result.push(`          docker tag ${name} $\{\{ secrets.DOCKER_USER }}/${name}:$VERSION`);
  result.push(`          docker tag ${name} $\{\{ secrets.DOCKER_USER }}/${name}:latest`);
  result.push(`          docker push $\{\{ secrets.DOCKER_USER }}/${name}:$VERSION`);
  result.push(`          docker push $\{\{ secrets.DOCKER_USER }}/${name}:latest\n\n`);
  return result.join('\n');
}