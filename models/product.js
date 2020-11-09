
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edible: {
      type: DataTypes.BOOLEAN
    },
    price: {
        type: DataTypes.NUMBER,
        // allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false

    },
    quantity: {
        type: DataTypes.STRING,
        allowNull: false

    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false

    },
    item_type: {
        type: DataTypes.STRING,
        allowNull: false

    },

  },
  {
    timestamps: false
  }
  
  );
  
  return Product;
};
