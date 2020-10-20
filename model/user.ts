import { Sequelize, ModelDefined, DataTypes, Optional } from "sequelize";

export interface UserAttributes {
  _id: string
  email: string
  familyName: string
  givenName: string
  googleId: string
  imageUrl: string
  name: string
  bio? : string
  status?: string
}

interface UserCreationAttributes extends Optional<UserAttributes, "_id"| "email" | "familyName" | "givenName" | "googleId" | "imageUrl" | "name"> {}

export default function (sequelize: Sequelize) {
  const user: ModelDefined <UserAttributes, UserCreationAttributes> = sequelize.define('User', {
      _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      familyName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      givenName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      googleId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }
  );
  return user;
}