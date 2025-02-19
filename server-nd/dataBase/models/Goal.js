const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Goal', {
    idGoal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    objectiveType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountObjective: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    targetDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'in-progress', 'completed'],
      defaultValue: 'pending',
      allowNull: false,
    },
    progress: {
      type: DataTypes.FLOAT,
      defaultValue: 0,  
      allowNull: false,
      validate: {
        min: 0, 
        max: 100, 
      },
    },
  });

  sequelize.models.Goal.belongsTo(sequelize.models.User, {
    foreignKey: 'idUser',
    as: 'user',
  });
};
