import { Sequelize } from "sequelize";
import UserFactory from "./user";

let sequelize = new Sequelize(
  // process.env.DB_NAME || 'zoomapp',
  // process.env.DB_USERNAME || 'postgres',
  // process.env.DB_PASSWORD || 'postgres',
  // {
  //   dialect: "postgres",
  //   host: "localhost",
  // }
  'postgres://db:5432/zoomapp', {
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
