import express from "express";
import blogRouter from "./routes.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/blogs", blogRouter);

app.use((req, res, next) => {
  res.status(500).send("no such route");
});

app.use((err, req, res, next) => {
  console.log("hey");
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
