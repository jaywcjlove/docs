# 构建镜像的基础源镜像
FROM nginx:1.19.6

ENV APPDIR /usr/share/nginx/web
RUN mkdir -p $APPDIR 

WORKDIR $APPDIR
ADD ./code/2x $APPDIR/2x

COPY web.conf /etc/nginx/conf.d
RUN cat /etc/nginx/conf.d/web.conf

EXPOSE 60008