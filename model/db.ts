import { Sequelize } from "sequelize";
import UserFactory from "./user";

let sequelize = new Sequelize(
  'postgres://localhost:5432/zoomapp', {
    username: 'postgres',
    password: 'postgres'
  }
);

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  User: UserFactory(sequelize),
};

export { db, sequelize };
