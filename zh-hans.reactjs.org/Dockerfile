# 构建镜像的基础源镜像
FROM nginx:1.17.6

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 

WORKDIR $APPDIR

ADD ./code $APPDIR

COPY web.conf /etc/nginx/conf.d

EXPOSE 60007