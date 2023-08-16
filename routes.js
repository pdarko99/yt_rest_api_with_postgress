import { Router } from "express";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleleteBlog,
  getBlogById
} from "./controller.js";
const blogRouter = Router();

blogRouter.get("/", getBlogs);
blogRouter.get("/:id", getBlogById);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleleteBlog);
blogRouter.post("/", createBlog);

export default blogRouter;
