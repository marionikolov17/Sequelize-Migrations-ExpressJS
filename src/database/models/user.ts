import { Model } from "sequelize";
import connection from "./../connection";

class User extends Model {

}

User.init({

}, {
  tableName: "athleans-users",
  sequelize: connection
});

export default User;