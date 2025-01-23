import mongoose from "mongoose";
import { isGoodPassword } from "../utils/validators.js";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        maxlength: 50,
        minlength: 2,
        trim: true,
        lowerCase: true,
        },
    LastName:{
        type: String,
        required: true,
        maxlength: 50,
        minlength: 2,
        trim: true,
        lowerCase: true,
        },
        email:{
            type: String,
            required: true,
            maxlength: 30,
            minlenght: 2,
            trim: true,
            lowercase: true,
            match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            unique: true,
        },
        age:{
            type: Number,
            required: true,
            min: 1,
            max: 110
        },
        registrationDate: {
            type: Date,
            default: Date.now
            
        },
        password: {
            type: String,
            validate:{
                validator: function(value){
                    return isGoodPassword(value);
                },
                message: "La contraseña debe contener al menos un dígito (número) ,una letra minúscula, una letra mayúscula y al menos 8 caracteres en total."

            }
          
        },
        

})

userSchema.pre("save",function (next){
    this.password = bcrypt.hashSync(this.password,10)
    next()
})


export default mongoose.model("user", userSchema);
