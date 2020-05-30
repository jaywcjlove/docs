sequelize.org
---

> Port: `60031` - [sequelize.org/master](https://sequelize.org/) - [Github](https://github.com/sequelize/sequelize.org)

```shell
docker pull wcjiang/sequelize.org:latest
```

Run Server

```shell
docker run --name sequelize.org -p 60031:60031 --restart=always -d wcjiang/sequelize.org:latest
```