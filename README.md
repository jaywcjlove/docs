Development Documentation.
----

Centralized management of various development documents. [Docker Repository.](https://hub.docker.com/r/wcjiang/docs)

## Quick Start

```bash
docker pull wcjiang/docs
```

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
  -p 60031:60031 \
  -p 60034:60034 \
  --restart=always \
  -d wcjiang/docs:1.0.0
```

## Port List

- Port: `60001` - [ant-design](https://ant.design/)
- ~~Port: `60002` - [cn.eslint.org](https://cn.eslint.org/)~~
- Port: `60003` - [cn.vuejs.org](https://cn.vuejs.org/)
- Port: `60004` - [koajs.com](https://koajs.com/)
- Port: `60005` - [react-native-doc](https://facebook.github.io/react-native/)
- Port: `60006` - [typeorm.github.io](https://typeorm.io/)
- Port: `60007` - [zh-hans.reactjs.org](https://zh-hans.reactjs.org/)
- Port: `60008` - [expressjs.com/2x](http://expressjs.com/) old
- Port: `60009` - [jestjs.io](https://jestjs.io/)
- Port: `60031` - [sequelize.org/v3](https://sequelize.org/v3/)
- ~~Port: `60032` - [sequelize.org/v4](https://sequelize.org/v4/)~~ Too big
- ~~Port: `60033` - [sequelize.org/v5](https://sequelize.org/v5/)~~ Too big
- Port: `60034` - [sequelize.org/master](https://sequelize.org/)

## Add Document

```bash
# Add submodule
$ git submodule add --force '仓库地址' '路径' -b '分支'
# Upgrade submodule
$ git submodule foreach --recursive git submodule update
```

## Build Image

```bash
$ docker image build -t docs .
# or
$ docker image build -t docs:1.0.0 .
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
  -p 60031:60031 \
  -p 60034:60034 \
  --name docs docs:1.0.0
```

## Other

View the directory size and order by command, See if you need to reduce the size.

```bash
du -sk * | sort -n
```