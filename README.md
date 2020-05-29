Development Documentation.
----

![Docker to document](https://github.com/jaywcjlove/docs/workflows/Docker%20to%20document/badge.svg)

Centralized management of various development documents. [Docker Repository.](https://hub.docker.com/r/wcjiang/docs) [Github](https://github.com/jaywcjlove/docs)

Docker Image | Version
---- | ----
[@wcjiang/docs](https://hub.docker.com/r/wcjiang/docs) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/docs)
[@wcjiang/ant.design](https://hub.docker.com/r/wcjiang/ant.design) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/ant.design)
[@wcjiang/cn.vuejs.org](https://hub.docker.com/r/wcjiang/cn.vuejs.org) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/cn.vuejs.org)
[@wcjiang/element.react](https://hub.docker.com/r/wcjiang/element.react) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/element.react)
[@wcjiang/element.eleme.io](https://hub.docker.com/r/wcjiang/element.eleme.io) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/element.eleme.io)
[@wcjiang/expressjs.com](https://hub.docker.com/r/wcjiang/expressjs.com) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/expressjs.com)
[@wcjiang/jestjs.io](https://hub.docker.com/r/wcjiang/jestjs.io) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/jestjs.io)
[@wcjiang/koajs.com](https://hub.docker.com/r/wcjiang/koajs.com) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/koajs.com)
[@wcjiang/react-native](https://hub.docker.com/r/wcjiang/react-native) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/react-native)
[@wcjiang/sequelize.org](https://hub.docker.com/r/wcjiang/sequelize.org) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/sequelize.org)
[@wcjiang/typeorm.github.io](https://hub.docker.com/r/wcjiang/typeorm.github.io) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/typeorm.github.io)
[@wcjiang/zh-hans.reactjs.org](https://hub.docker.com/r/wcjiang/zh-hans.reactjs.org) | ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/zh-hans.reactjs.org)

## Quick Start

```bash
# Contains all documents
docker pull wcjiang/docs:latest
```

Run Server

```bash
docker run --name docs \
  -p 60001:60001 \
  -p 60003:60003 \
  -p 60004:60004 \
  -p 60005:60005 \
  -p 60006:60006 \
  -p 60007:60007 \
  -p 60008:60008 \
  -p 60009:60009 \
  -p 60010:60010 \
  -p 60011:60011 \
  -p 60031:60031 \
  -p 60034:60034 \
  --restart=always \
  -d wcjiang/docs:latest
```

## Independent deployment

```shell
docker pull wcjiang/ant.design:latest
```

Run Server

```shell
docker run --name ant.design -p 60001:60001 --restart=always -d wcjiang/ant.design:latest
```

## Port List

- Port: `60001` - [ant.design](https://ant.design/) - [Github](https://github.com/ant-design/ant-design)
- ~~Port: `60002` - [cn.eslint.org](https://cn.eslint.org/) - [Github](https://github.com/eslint/cn.eslint.org)~~
- Port: `60003` - [cn.vuejs.org](https://cn.vuejs.org/) - [Github](https://github.com/vuejs/cn.vuejs.org)
- Port: `60004` - [koajs.com](https://koajs.com/) - [Github](https://github.com/koajs/koajs.com)
- Port: `60005` - [react-native-doc](https://facebook.github.io/react-native/)
- Port: `60006` - [typeorm.github.io](https://typeorm.io/)
- Port: `60007` - [zh-hans.reactjs.org](https://zh-hans.reactjs.org/)
- Port: `60008` - [expressjs.com/2x](http://expressjs.com/) old
- Port: `60009` - [jestjs.io](https://jestjs.io/)
- Port: `60010` - [element.eleme.io](https://element.eleme.io)
- Port: `60011` - [element.react](https://elemefe.github.io/element-react)
- Port: `60031` - [sequelize.org/v3](https://sequelize.org/v3/)
- ~~Port: `60032` - [sequelize.org/v4](https://sequelize.org/v4/)~~ Too big
- ~~Port: `60033` - [sequelize.org/v5](https://sequelize.org/v5/)~~ Too big
- Port: `60034` - [sequelize.org/master](https://sequelize.org/) - [Github](https://github.com/sequelize/sequelize.org)

## Add Document

```bash
# Add submodule
$ git submodule add --force '仓库地址' '路径' -b '分支'
# Upgrade submodule
$ git submodule foreach --recursive git submodule update
```

## Build Image

```bash
$ docker image build -t wcjiang/docs .
# or
$ docker image build -t wcjiang/docs:1.1.0 .
```

```bash
docker run --rm \
  -p 60001:60001 \
  -p 60003:60003 \
  -p 60004:60004 \
  -p 60005:60005 \
  -p 60006:60006 \
  -p 60007:60007 \
  -p 60008:60008 \
  -p 60009:60009 \
  -p 60010:60010 \
  -p 60011:60011 \
  -p 60031:60031 \
  -p 60034:60034 \
  --name docs wcjiang/docs:latest
```

## Other

View the directory size and order by command, See if you need to reduce the size.

```bash
du -sk * | sort -n
```

## Links

- [@jaywcjlove/doc-static](https://github.com/jaywcjlove/doc-static)
- [@jaywcjlove/react-native-doc](https://github.com/jaywcjlove/react-native-doc)
- [Docker Repository.](https://hub.docker.com/r/wcjiang/docs)
- [Hello Docker CI/CD - Github Actions](https://www.basefactor.com/github-actions-docker)
