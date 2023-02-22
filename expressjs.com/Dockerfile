# 构建镜像的基础源镜像
FROM nginx:1-alpine

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 

WORKDIR $APPDIR
ADD ./code/2x $APPDIR/2x
