# 构建镜像的基础源镜像
FROM nginx:1.17.6

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 
WORKDIR $APPDIR

ADD ./ $APPDIR
COPY nginx/web.conf /etc/nginx/conf.d/

EXPOSE 60001 60002 60003 60004 60005 60006 60031 60032 60033 60034