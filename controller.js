import {
  updateBlogLogic,
  createBloglogic,
  getBlogsLogic,
  deleteBlogLogic,
  getBlogByIdLogic,
} from "./services.js";

const getBlogs = async (req, res, next) => {
  try {
    let blogs = await getBlogsLogic();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(`Error getting blogs: ${error}`);
    res.status(500).json({ error: "Error getting blogs" });
  }
};

const getBlogById = async (req, res, next) => {
  try {
    let id = req.params.id;
    let blog = await getBlogByIdLogic(id);
    if (!blog) {
      return res.status(404).json({ error: "No blog exist with such id" });
    }
    res.status(200).json({ blog });
  } catch (error) {
    console.error(`Error getting blog: ${error}`);
    res.status(500).json({ error: "Error getting blog by id" });
  }
};

const createBlog = async (req, res, next) => {
  try {
    let data = req.body;
    let blog = await createBloglogic(data);
    res.status(201).json(blog);
  } catch (error) {
    console.error(`Error creating blog: ${error}`);
    res.status(500).json({ error: "Error creating blog" });
  }
};

const updateBlog = async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = req.body;
    await updateBlogLogic(id, data);
    res.status(200).json({ msg: "updated successfully" });
  } catch (error) {
    console.error(`Error updating blogs: ${error}`);
    res.status(500).json({ error: "Error updating blog" });
  }
};

const deleleteBlog = async (req, res, next) => {
  try {
    let id = req.params.id;
    await deleteBlogLogic(id);
    res.status(200).json({ msg: "deleted successfully" });
  } catch (error) {
    console.error(`Error deleting blog: ${error}`);
    res.status(500).json({ error: "Error deleting blog" });
  }
};

export { getBlogs, createBlog, updateBlog, deleleteBlog, getBlogById };
