/* require("dotenv").config({
  path: ".env",
}); */
const unleash = require("unleash-server");
const cors = require("cors");

const {
  DATABASE_SSL,
  DATABASE_HOST,
  PORT,
  DATABASE_URL,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = process.env;

unleash
  .start({
    db: {
      ssl: DATABASE_SSL || false,
      host: DATABASE_HOST || "localhost",
      port: PORT || 5432,
      database: DATABASE_URL || "unleash",
      user: DATABASE_USER || "postgres",
      password: DATABASE_PASSWORD || "password",
    },
    server: {
      port: 4242,
    },
    preHook: (app) => {
      app.use(cors());
    },
  })
  .then((unleash) => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get("port")}`
    );
  });
