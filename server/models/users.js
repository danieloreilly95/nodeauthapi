'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: {type: DataTypes.STRING, primaryKey: true},
    password: {type: DataTypes.STRING, allowNull: false},
	access_key: {type: DataTypes.STRING, allowNull: true},
	secret_key: {type: DataTypes.STRING, allowNull: true}
  }, {
	  // don't add the timestamp attributes (updatedAt, createdAt)
	  timestamps: false,
	  tableName: 'users'
  }, {
    classMethods: {
      associate: function(models) {
		// Users can have many purchases, user table points to purchases table
		//Users.hasMany(models.Purchases, { foreignKey:'user_id' });
      }
    },
  });
  return Users;
};