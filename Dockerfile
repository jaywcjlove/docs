FROM nginx:1.19.4

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 
ENV ROOT $PWD

WORKDIR $APPDIR

RUN echo $PWD/nginx/web.conf
COPY $PWD/nginx/web.conf /etc/nginx/conf.d
RUN cat /etc/nginx/conf.d/web.conf

ADD ./angular.cn/code $APPDIR/angular.cn
ADD ./ant.design/code $APPDIR/ant.design
ADD ./cn.eslint.org/code $APPDIR/cn.eslint.org
ADD ./cn.vuejs.org/code $APPDIR/cn.vuejs.org
ADD ./deno-manual-cn/code $APPDIR/deno-manual-cn
ADD ./element.eleme.io/code $APPDIR/element.eleme.io
ADD ./element.react/code $APPDIR/element.react
ADD ./expressjs.com/code/2x $APPDIR/expressjs.com/2x
ADD ./graphql.github.io/code $APPDIR/graphql.github.io
ADD ./jestjs.io/code $APPDIR/jestjs.io
ADD ./koajs.com/code $APPDIR/koajs.com

ADD ./react-native/code $APPDIR/react-native
ADD ./sequelize.org/code/v3 $APPDIR/sequelize.org/v3
# ADD ./sequelize.org/code/v4 $APPDIR/sequelize.org/v4
# ADD ./sequelize.org/code/v5 $APPDIR/sequelize.org/v5
ADD ./sequelize.org/code/master $APPDIR/sequelize.org/master
ADD ./typeorm.github.io/code $APPDIR/typeorm.github.io
ADD ./typescriptlang.org/code $APPDIR/typescriptlang.org
ADD ./uiwjs.github.io/code $APPDIR/uiwjs.github.io
ADD ./webpack.js.org/code $APPDIR/webpack.js.org
ADD ./zh-hans.reactjs.org/code $APPDIR/zh-hans.reactjs.org


EXPOSE 60001 60002 60003 60004 60005 60006 60007 60008 60009 60010 60011 60012 60013 60066 60031 60032 60033 60034