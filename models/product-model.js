import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,       
    },
    quantity : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true,

    },
    description : {
        type : String,
        required : true,
    },
    user : {
    type : mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
    },


}, {
    timestamps : true,
})

let products = mongoose.model("products", userSchema);
export default products