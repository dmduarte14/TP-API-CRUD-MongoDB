import express from "express";
import {createUser, getUsers, deleteUser, updateUser,getUsersbyID, validate} 
from "../controllers/userControllers.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";


const userRoute = express.Router();

//http://localhost:3030/api/user/create

userRoute.post("/create", createUser);
userRoute.get("/get",verifyTokenMiddleware, getUsers);
userRoute.get("/get/:id", verifyTokenMiddleware, getUsersbyID);
userRoute.delete("/delete/:id", verifyTokenMiddleware, deleteUser);
userRoute.put("/update/:id", verifyTokenMiddleware, updateUser);
//userRoute.post("/login",validate)
userRoute.post("/login",validate)


export default userRoute;