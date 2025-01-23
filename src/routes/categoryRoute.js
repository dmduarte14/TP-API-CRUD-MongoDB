import express from "express";
import {createCategory,deleteCategory,getCategories, updateCategory, getCategorybyID} from "../controllers/categoryControllers.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = express.Router();

//http://localhost:3030/api/user/create

categoryRoute.post("/create", verifyTokenMiddleware, createCategory);
categoryRoute.get("/get", verifyTokenMiddleware, getCategories);
categoryRoute.get("/get/:id", verifyTokenMiddleware, getCategorybyID);
categoryRoute.delete("/delete/:id", verifyTokenMiddleware, deleteCategory);
categoryRoute.put("/update/:id", verifyTokenMiddleware, updateCategory);


export default categoryRoute;