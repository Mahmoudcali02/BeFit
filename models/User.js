const {Model, DataTypes} = require ("sequelize");
const bcrypt = require ("bcrypt")
const sequelize = require ("../config/connection")

class User extends Model {
    checkpass (pw){
        return bcrypt.compareSync(pw, this.password)
    }
}
