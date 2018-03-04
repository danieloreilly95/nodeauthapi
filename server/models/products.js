'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: {type: DataTypes.STRING, allowNull: false, unique: true, primaryKey: true},
    price: {type: DataTypes.FLOAT, allowNull: false},
    category: {type: DataTypes.STRING, allowNull: false}
  },{
	  // don't add the timestamp attributes (updatedAt, createdAt)
	  timestamps: false,
	  tableName: 'products'
  }, {
    classMethods: {
      associate: function(models) {
		// one products references Purchase_Items using product_id
		//Products.belongsTo(models.Purchase_Items, { foreignKey:'product_id'});
      }
    }
  });
  return Products;
};