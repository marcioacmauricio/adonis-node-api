# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
### Database
Install postgres as docker
```
sudo docker pull postgres
```
Start database postgres
```
sudo docker run -d -p 5400:5432 --name mypostgresdb -e POSTGRES_PASSWORD=123123 postgres
```
Create databse api after start
