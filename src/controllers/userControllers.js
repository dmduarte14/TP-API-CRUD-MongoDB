import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const createUser = async (req, res) =>{
    try {
        const userData = new User(req.body)

        const {email} = userData;

        const userExist = await User.findOne({ email});

        if(userExist){
            return res.status(400).
            json({message: ` user ${email} already exists`});
        }
                      
            const savedUser = await userData.save();
            const {password, ...rest} = savedUser;
            res.status(201).json("User created successfully");
        

    } catch (error) {
       res.status(500).json({message: "internal server error en create", error});
    }

}

export const getUsers = async (req, res) =>{
try {

    const token = req.headers.authorization?.split(' ')[1]; // Si está en formato "Bearer <token>"
    console.log("Token:", token); // Mostrar el token en la consola

    const users = await User.find();
    if (users.length===0) {
        return res.status(404).json({message: "users not found"});
    }
        res.status(200).json(users)
    

} catch (error) {
    return  res.status(500).json({message: "internal server error en get", error});
}

}

export const deleteUser = async (req,res) =>{
try {
    const _id = req.params.id;
    //aqui se valida
    const userExist =await User.findOne({_id});//este es el dato por el cual lo busco

if (!userExist) {
    return res.status(404).json({message: "user not found"});
}
    await User.findByIdAndDelete(_id);
    return res.status(200).json({message: "user deleted successfully"});


} catch (error) {
    return res.status(500).json({message: "internal server error en delete", error});
}
}

export const updateUser = async (req, res) =>{

try {
    const _id = req.params.id;
    const userExist = await User.findOne({_id});

    if(!userExist)
    {
        return res.status(404).json({message:"User not found"});
    }
     const updatedUser = await User.findByIdAndUpdate(_id, req.body,{
        new: true});
        res.status(201).json(updateUser)
  
    
} catch (error) {
   return res.status(500).json({message: "internal server error en update", error});
       
}

}

export const getUsersbyID = async (req,res)=>{
try {
    const _id = req.params.id;
    const userExist = await User.findById({_id})

    if (!userExist){
        return res.status(400).json({message: `User ${_id} doesnt exists`})
    }
    res.status(200).json({userExist})
    
} catch (error) {
    return res.status(500).json({ message: "internal server error in find id", error });
}
}

export const validate = async (req,res) => {
   try {

    if (!(req.body.email && req.body.password)) {
        return res.status(400).json({ message: "There's a missing field" });
      }
  
    const userFound = await User.findOne({email: req.body.email})

    if (!userFound)   {
        res.status(400).json({message: "email or pasword are wrong"})
    }

    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      const payload = {
                userID: userFound._id,
                userEmail: userFound.email
                     }
        const token = jwt.sign(payload, "secret",{expiresIn:"1h"})
        console.log({ token });
     req.session.token = token;
   

      return res.status(200).json({message: "Logged in", token})
     

    }else{

        return res.status(400).json({message: "email or password are wrong "})
    }
   
} catch (error) {
    return res.status(500).json({ message: "internal server error in validate", error });
   } 
}