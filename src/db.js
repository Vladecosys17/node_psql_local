import pg from "pg";
import {
  DB_USER,
  DB_HOST,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
} from "./config.js";

export const pool = new pg.Pool({
  host: "DB_HOST",
  user: "DB_USER",
  password: "DB_PASSWORD",
  port: DB_PORT,
  database: "DB_DATABASE",
});
