import { client } from "./db.js";

const updateBlogLogic = async (id, data) => {
  const update = await client.query(
    "UPDATE blog_table SET title = $1,  description = $2 WHERE id = $3",
    [data.title, data.description, id]
  );
  return update;
};

const createBloglogic = async (data) => {
  const blog = await client.query(
    "INSERT INTO blog_table (title, description) VALUES ($1,$2)  RETURNING id",
    [data.title, data.description]
  );

  return blog;
};

const getBlogsLogic = async () => {
  const blogs = await client.query("SELECT * FROM blog_table");
  return blogs.rows[0];
};

const getBlogByIdLogic = async (id) => {
  const result = await client.query(
    "SELECT * FROM blog_table WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

const deleteBlogLogic = async (id) => {
  await client.query("DELETE FROM blog_table WHERE id = $1", [id]);
};

export {
  updateBlogLogic,
  createBloglogic,
  getBlogsLogic,
  deleteBlogLogic,
  getBlogByIdLogic,
};
