# 构建镜像的基础源镜像
FROM nginx:1.18.0

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 

WORKDIR $APPDIR

ADD ./code $APPDIR

RUN cat web.conf
COPY web.conf /etc/nginx/conf.d

EXPOSE 60013