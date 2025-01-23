import express from "express";
import {createProduct,
        getProducts,
        findProductbyID, 
        deleteProduct,
        updateProduct
         } from "../controllers/productController.js";

         import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
const productRoute = express.Router();

//http://localhost:3030/api/user/create

productRoute.post("/create", verifyTokenMiddleware, createProduct);
productRoute.get("/get", verifyTokenMiddleware, getProducts);
productRoute.get("/get/:id", verifyTokenMiddleware, findProductbyID);
productRoute.delete("/delete/:id", verifyTokenMiddleware, deleteProduct);
productRoute.put("/update/:id", verifyTokenMiddleware, updateProduct);


export default productRoute;