FROM nginx:1.18.0

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 
ENV ROOT $PWD

WORKDIR $APPDIR

RUN echo $PWD/nginx/web.conf
COPY $PWD/nginx/web.conf /etc/nginx/conf.d
RUN cat /etc/nginx/conf.d/web.conf

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
ADD ./uiwjs.github.io/code $APPDIR/uiwjs.github.io
ADD ./zh-hans.reactjs.org/code $APPDIR/zh-hans.reactjs.org

ADD ./sequelize.org/code/v3 $APPDIR/sequelize.org/v3
# ADD ./sequelize.org/code/v4 $APPDIR/sequelize.org/v4
# ADD ./sequelize.org/code/v5 $APPDIR/sequelize.org/v5
ADD ./sequelize.org/code/master $APPDIR/sequelize.org/master

RUN mkdir -p $APPDIR/webpack.js.org
ADD ./webpack.js.org/code $APPDIR/webpack.js.org


EXPOSE 60001 60002 60003 60004 60005 60006 60007 60008 60009 60010 60011 60012 60013 60066 60031 60032 60033 60034