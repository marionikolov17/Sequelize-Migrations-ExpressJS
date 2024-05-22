import { Model } from "sequelize";
import connection from "./../connection";

class User extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public username!: string;
  public email!: string;
  public password!: string;
  public profile_picture_url!: string;
  public country!: string;
  public languages!: string;
  public phone_number!: string;
  public user_role!: number;
  public visible!: number;
  public date_created!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({

}, {
  tableName: "athleans-users",
  sequelize: connection
});

export default User;