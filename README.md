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

## 2. Initialize Sequelize 
**NOTE: This step is to show you how you can create your own sequelize configuration. You can skip this, because it will be already done.** <br />
First, you must have the '.sequelizerc' file in your project folder, and then you must run this command: <br />
```
npx sequelize-cli init
```
This will create a 'database' folder in your 'src' folder. In this 'database' folder you will store all the data access logic - models and migrations.

## 3. Run migrations
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
*When running this command don't focus on the '--attributes', just add some attributes in order for the command to be successful and later on
this attributes will be edited manually from us.* <br />
You will get two **.js** files. One in the 'migrations' folder and one in the 'models' folder. You must edit the files to **.ts** files and
copy the structure I have written in the previous models and migrations, becuase otherwise it will throw errors! After finishing writing the model and the migration
you must run the 'migration' command in order for your new model to appear in the database. Then your are ready to import it and use it anywhere it is 
neccessary.
