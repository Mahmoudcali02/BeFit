const {Model, DataTypes} = require ("sequelize");
const sequelize = require ("../config/connection");

class Exercise extends Model {}
Exercise.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sets: {
        dataType: DataTypes.INTEGER,
        allowNull: true,
    },
    reps: {
        dataType: DataTypes.INTEGER,
        allowNull: true,
    },
    minutes: {
        dataType: DataTypes.INTEGER,
        allowNull: true,
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Exercise"
}
)

module.exports = Exercise