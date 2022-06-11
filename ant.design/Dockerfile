# 构建镜像的基础源镜像
FROM nginx:1-alpine

ENV APPDIR /usr/share/nginx/html
RUN mkdir -p $APPDIR 

WORKDIR $APPDIR
ADD ./code $APPDIR
