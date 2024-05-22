<h1>Sequelize ORM flow</h1>

For now this is a demo project, showcasing how we will work with our database when building the backend.
It is optional to inspect this demo and learn how sequelize models and migrations work. This documentation will be updated when I finish
Back-End Best Practises documentations, because we must think about how our configuration files will work on our machines, without affecting the project configs
on github. So just learn how to work with models and migrations for now.

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
### How to create a new model
When you want to create a new model(table with fields) on the database you must do the following operations: <br />
**1. You must execude the following command**
```
npx sequelize-cli model:generate --name 'ModelName' --attributes name:string,id:number
```