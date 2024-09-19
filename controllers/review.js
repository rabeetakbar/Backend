import { request } from "http";
import { response } from "express";
import review from "../models/review-model.js";

export const postReview = async (req , res ) => {
    try{
        const {name,email,detailedreview,rating  } = req.body;
        console.log(name,email,detailedreview,rating); 

        
        const reviewData = review({
            name,email,detailedreview,rating
        })

        await reviewData.save();
        return res.status(200).json({ message: "Review saved succesfully", success: true , reviewData});


    }
    catch(error){
        res.status(500).json(error.message);
    }
}


export const getReviewsData = async (req, res) => {
    try {
        const getReview = await review.find()
        return res.status(200).json({ success : true , getReview});   
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}
//-------------------------------Not Needed in this---------------------------
// export const getProductById = async (req , res) => {
//     try{
//         const getProductId = req.params.id;
//         const productData = await products.findById(getProductId);
//         if (!productData) {
//             return res.status(404).json({ message: "product not found" });

//         }
//         return res.status(200).json({ success: true, productData , message :"got data"});   
//     }
//     catch(error){
//             res.status(500).json(error.message);
//     }
// }

export const getReviewByuser = async (req , res) => {
    try{
        const reviewData = await review.find().populate("user");
        if (!reviewData) {
            return res.status(404).json({ message: "review not found" });

        }
        return res.status(200).json({ success: true, reviewData , message :"got data"});   
    }
    catch(error){
            res.status(500).json(error.message);
    }
}

// ----------------------not needed------------------------------

// export const updateProductById = async (req, res) => {
//     try {
//         const productId = req.params.id;
        
//         // The fields to update
//         const { name , quantity , price, description,user } = req.body;

//         // Find the product by ID and update with the new data
//         const updatedProduct = await products.findByIdAndUpdate(
//             productId,
//             { name , quantity , price, description,user  }, // Object with the updated fields
//             { new: true } // This option ensures you get the updated document in the response
//         );

//         if (!updatedProduct) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         return res.status(200).json({
//             success: true,
//             user: updatedProduct,
//             message: "Product updated successfully"
//         });
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };




export const deleteReviewById = async (req , res) => {
    try{
        const deleteReviewById = req.params.id;
        const reviewData = await review.findByIdAndDelete(deleteReviewById);
        if (!reviewData) {
            return res.status(404).json({ message: "not found" });
        }
        return res.status(200).json({ success: true, reviewData , message :"Review deleted"});   
    }
    catch(error){
            res.status(500).json(error.message);
    }
}