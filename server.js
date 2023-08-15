import express from "express";
import { client } from "./db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/v1/blogs", async (req, res) => {
  try {
    await client.connect();
    const result = await client.query("SELECT * FROM registration");
    console.log(result.rows);
    res.send(result);
  } catch (error) {
    throw error;
  } finally {
    await client.end();
  }
});

app.use((req, res, next) => {
    res.status(500).send("no such route");
  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
