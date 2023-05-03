'use strict';

import {Model} from 'sequelize';

interface ProjectUserAttributes{
  Projectid:number,
  Userid:String,
  budget:number
}

module.exports = (sequelize:any, DataTypes:any) => {
  class ProjectUser extends Model<ProjectUserAttributes> implements ProjectUserAttributes {
    Projectid!:number;
    Userid!:String;
    budget!:number;
    static associate(models:any) {
      // define association here
    }
  }
  ProjectUser.init({
    Projectid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        references:{
            model:'Project',
            key:'id'
        }
    },
    Userid:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:false,
        references:{
            model:'User',
            key:'awsCognitoId'
        }
    },
    budget:DataTypes.DECIMAL(10,2),
  }, {
    sequelize,
    modelName: 'ProjectUser',
  });
  return ProjectUser;
};