<h1>Sequelize ORM flow</h1>

For now this is a demo project, showcasing how we will work with our database when building the backend.
It is optional to inspect this demo and learn how sequelize models and migrations work.

## 1. Create database
**Before creating database, make sure you go in your config file and change the parameters that match your workbench configurations!** <br />
In order to create database you must run: <br />
```
npm run create-db
```
**Note: you must have 'MySQL Workbench installed and setup**


## 2. Run migrations
After successfully creating database you must run the current migrations in order to get all the tables and fields for the current models created. <br />
The only thing you need is to run this command:
```
npm run migrate
```