import mongoose from "mongoose";


const adminSchema=new mongoose.Schema(
    {
    name : {
            type: String,
            required : true,       
        },
        email : {
            type : String,
            required : true,
        },
        detailedreviews: {
            type : String,
        },
        rating : {
            type : Number,
            required : true,
        },




    },
    {
        timestamps : true,
    })
    
    let review = mongoose.model("review", adminSchema);
    export default review