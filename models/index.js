const User = require ("./User");
const Exercise = require ("./Exercise");

Exercise.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

User.hasMany(Exercise, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

module.exports = {User, Exercise};

