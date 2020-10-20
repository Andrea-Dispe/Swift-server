import { Sequelize } from "sequelize";
import UserFactory from "./user";

let sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: "localhost",
  }
);

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  User: UserFactory(sequelize),
};

export { db, sequelize };
