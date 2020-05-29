# 构建镜像的基础源镜像
FROM nginx:1.18.0

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 

WORKDIR $APPDIR

ADD ./ant.design/code $APPDIR/ant.design
# ADD ./cn.eslint.org/code $APPDIR/cn.eslint.org
ADD ./cn.vuejs.org/code $APPDIR/cn.vuejs.org
ADD ./ant.design/code $APPDIR/ant.design

RUN mkdir -p $APPDIR/deno-manual-cn
ADD ./deno-manual-cn/code $APPDIR/deno-manual-cn

ADD ./expressjs.com/code/2x $APPDIR/expressjs.com/2x

ADD ./koajs.com/code $APPDIR/koajs.com
ADD ./jestjs.io/code $APPDIR/jestjs.io
ADD ./react-native/code $APPDIR/react-native
ADD ./typeorm.github.io/code $APPDIR/typeorm.github.io
ADD ./zh-hans.reactjs.org/code $APPDIR/zh-hans.reactjs.org

ADD ./sequelize.org/code/v3 $APPDIR/sequelize.org/v3
# ADD ./sequelize.org/code/v4 $APPDIR/sequelize.org/v4
# ADD ./sequelize.org/code/v5 $APPDIR/sequelize.org/v5
ADD ./sequelize.org/code/master $APPDIR/sequelize.org/master

RUN mkdir -p $APPDIR/webpack.js.org
ADD ./webpack.js.org/code $APPDIR/webpack.js.org

COPY nginx/web.conf /etc/nginx/conf.d

EXPOSE 60001 60002 60003 60004 60005 60006 60031 60032 60033 60034