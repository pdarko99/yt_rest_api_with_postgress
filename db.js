import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "my_portal",
  password: "gospel333",
  port: 5432, // Default port is 5432
});

export { client };
