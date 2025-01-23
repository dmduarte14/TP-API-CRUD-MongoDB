import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
name: {
    type: String,
    requiered: true,
    unique: true,
    trim: true,
    lowercase: true,
},
});

export default mongoose.model("category", categorySchema);