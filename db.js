import pkg from 'pg';
const { Pool } =  pkg;

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "gospel333",
  port: 5432, // Default port is 5432
});

export { client };
