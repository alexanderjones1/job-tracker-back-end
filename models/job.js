'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.Profile, { foreignKey: 'profileId'})
    }
  }
  Job.init({
    title: DataTypes.STRING,
    salary: {
      type: DataTypes.INTEGER,
      validate: {
        min: 5000,
      }
    },
    description: DataTypes.STRING,
    stillHiring: DataTypes.BOOLEAN,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};