import Product, { statusEnum } from "../models/productModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category");
        if (products.length === 0) {
            return res.status(204).json({ message: "products not found" });
        }
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: "internal server error en get", error });
    }
};

export const createProduct = async (req, res) => {
    try {
        const productData = new Product(req.body);
        const {name} = productData;
        const productExist = await Product.findOne({name});
        if (productExist){
            return res.status(400).json({message:`Product ${name} already exists`});
        }
        const savedProduct = await productData.save();
        return res.status(201).json({message:`Product ${name} has been created`});

    } catch (error) {
        return res.status(500).json({ message: "internal server error en create", error });
    }
};

export const findProductbyID = async (req,res)=>{
try {
    const _id = req.params.id;
    const productExist = await Product.findById({_id})

    if (!productExist){
        return res.status(400).json({message: `Product ${_id} doesnt exists`})
    }
    res.status(200).json({productExist})
    
} catch (error) {
    return res.status(500).json({ message: "internal server error en find id", error });
}
}


 export const updateProduct = async (req,res) =>{

    try {
        const _id = req.params.id
        const productExist = await Product.findOne({_id})

    
        if(!productExist){
            return req.status(404).json({message: "Product doesn't exists"})
        }
        
       const updatedProduct = await Product.findByIdAndUpdate(_id, req.body,{new:true});
        res.status(201).json({message: `product ${updatedProduct} has been updated`})
    }catch(error){
        return res.status(500).json({message: "internal server error en update", error});
    }
    
    
    }

export const deleteProduct = async(req, res) => {
    try {
        const _id = req.params.id;
   
        const productExist = await Product.findOne({_id})
       
        if(!productExist){
            return res.status(404).json({message:"Product doesn't exists"})
       
        }
        await Product.findByIdAndDelete(_id)
        return res.status(201).json({message:`Product has been deleted`})

    } catch (error) {
        return res.status(500).json({message: "Internal error in delete product",error})
        
    }

}

