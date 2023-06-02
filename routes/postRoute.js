import express from 'express'
import { AllPost,AddPost,DeletePost,OnePost,UpdatePost } from '../controller/PostController';


const postRoute = express.Router();

postRoute.post("/",AddPost)
postRoute.get("/",AllPost)
postRoute.get("/:id",OnePost)
postRoute.put("/:id",UpdatePost)
postRoute.delete("/:id",DeletePost)

export default postRoute