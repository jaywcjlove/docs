# 构建镜像的基础源镜像
FROM nginx:1.17.6

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 

WORKDIR $APPDIR

ADD ./ant.design $APPDIR/ant.design
# ADD ./cn.eslint.org $APPDIR/cn.eslint.org
ADD ./cn.vuejs.org $APPDIR/cn.vuejs.org
ADD ./element/2.13 $APPDIR/element

ADD ./expressjs.com/2x $APPDIR/expressjs.com/2x

ADD ./koajs.com $APPDIR/koajs.com
ADD ./jestjs.io $APPDIR/jestjs.io
ADD ./react-native $APPDIR/react-native
ADD ./typeorm.github.io $APPDIR/typeorm.github.io
ADD ./zh-hans.reactjs.org $APPDIR/zh-hans.reactjs.org


ADD ./sequelize.org/v3 $APPDIR/sequelize.org/v3
# ADD ./sequelize.org/v4 $APPDIR/sequelize.org/v4
# ADD ./sequelize.org/v5 $APPDIR/sequelize.org/v5
ADD ./sequelize.org/master $APPDIR/sequelize.org/master

COPY nginx/web.conf /etc/nginx/conf.d

EXPOSE 60001 60002 60003 60004 60005 60006 60031 60032 60033 60034