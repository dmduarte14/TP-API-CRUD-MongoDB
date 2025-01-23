import Category from "../models/categoryModel.js";

export const getCategories = async (reqq, res)=>{
    try {
        const categories = await Category.find();
        if (categories.length===0) {
            return res.status(204).json({message: "categories not found"});
        }
        return res.status(200).json(categories)
        
    } catch (error) {
        return res.status(500).json({error,message:"internal server error en getCategories"});
    }
}

export const createCategory = async (req, res) =>{
try {
    const name = req.body.name;
    const categoryExist = await Category.findOne({name});

    if(categoryExist){
        res.status(400).json({message:"Category is already exists"})
    }
      const newCategory = new Category({name})
      const response = await newCategory.save();
      res.status(201).json({message:`Category ${name} has been created`})
    } catch (error) {
        return res.status(500).json({error,message:"internal server error en createCategories"});
    
}

}


export const deleteCategory = async (req,res) =>{
try {
    const _id = req.params.id;
    //aqui se valida
    const categoryExist =await Category.findOne({_id});//este es el dato por el cual lo busco

if (!categoryExist) {
    return res.status(404).json({message: "category not found"});
}
    await Category.findByIdAndDelete(_id);
    return res.status(200).json({message: "category deleted successfully "});


} catch (error) {
    return res.status(500).json({message: "internal server error en delete category", error});
}
}


export const updateCategory = async (req, res) =>{

try {
    const _id = req.params.id;
    const categoryExist = await Category.findOne({_id});

    if(!categoryExist)
    {
        return res.status(404).json({message:"Category not found"});
    }
     const updatedCategory = await Category.findByIdAndUpdate(_id, req.body,{
        new: true});
        res.status(201).json(updateCategory)
  
    
} catch (error) {
   return res.status(500).json({message: "internal server error en update", error});
       
}

}

export const getCategorybyID = async (req,res)=>{
try {
    const _id = req.params.id
    const categoryExist = await Category.findById({_id})

    if(!categoryExist){
      return res.status(400).json({message: "Category not found"})
    }
   
     res.status(200).json({categoryExist})


    } catch (error) {
        return res.status(500).json({ message: "internal server error en find id", error });

}
   

}