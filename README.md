Document
----

## Document List

- Port: `60001` - [ant-design](https://ant.design/)
- Port: `60002` - [cn.eslint.org](https://cn.eslint.org/)
- Port: `60003` - [cn.vuejs.org](https://cn.vuejs.org/)
- Port: `60004` - [koajs.com](https://koajs.com/)
- Port: `60005` - [react-native-doc/react-native](https://facebook.github.io/react-native/)
- Port: `60006` - [typeorm.github.io](https://typeorm.io/)
- Port: `60007` - [zh-hans.reactjs.org](https://zh-hans.reactjs.org/)
- Port: `60008` - [expressjs.com/2x](http://expressjs.com/) old
- Port: `60031` - [sequelize.org/v3](https://sequelize.org/v3/)
- Port: `60032` - [sequelize.org/v4](https://sequelize.org/v4/)
- Port: `60033` - [sequelize.org/v5](https://sequelize.org/v5/)
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
$ docker image build -t document .
# or
$ docker image build -t document:1.0.0 .
```