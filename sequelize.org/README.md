sequelize.org
---

> Port: `60034` - [sequelize.org/master](https://sequelize.org/) - [Github](https://github.com/sequelize/sequelize.org)

```shell
docker pull wcjiang/sequelize.org:latest
```

Run Server

```shell
docker run --name sequelize.org -p 60034:60034 --restart=always -d wcjiang/sequelize.org:latest
```