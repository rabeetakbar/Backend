import { request } from "http";
import { response } from "express";
import products from "../models/product-model.js";


export const postProductData = async (req , res ) => {
    try{
        const {name , quantity , price, description,user  } = req.body;
        console.log(name , quantity, price, description,user); 
        const isnameExisted = await products.findOne({ name: name });
        if(isnameExisted) {
            return res.status(400).json({ message: "already exists" });
        }
        
        const productData = products({
            name,
            quantity,
            price,
            description,
            user
        })

        await productData.save();
        return res.status(200).json({ message: "data saved succesfully", success: true , productData});


    }
    catch(error){
        res.status(500).json(error.message);
    }
}


export const getProductsData = async (req, res) => {
    try {
        const getProducts = await products.find()
        return res.status(200).json({ success : true , getProducts});   
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

export const getProductById = async (req , res) => {
    try{
        const getProductId = req.params.id;
        const productData = await products.findById(getProductId);
        if (!productData) {
            return res.status(404).json({ message: "product not found" });

        }
        return res.status(200).json({ success: true, productData , message :"got data"});   
    }
    catch(error){
            res.status(500).json(error.message);
    }
}
export const getProductByuser = async (req , res) => {
    try{
        const productData = await products.find().populate("user");
        if (!productData) {
            return res.status(404).json({ message: "product not found" });

        }
        return res.status(200).json({ success: true, productData , message :"got data"});   
    }
    catch(error){
            res.status(500).json(error.message);
    }
}





export const updateProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        
        // The fields to update
        const { name , quantity , price, description,user } = req.body;

        // Find the product by ID and update with the new data
        const updatedProduct = await products.findByIdAndUpdate(
            productId,
            { name , quantity , price, description,user  }, // Object with the updated fields
            { new: true } // This option ensures you get the updated document in the response
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            success: true,
            user: updatedProduct,
            message: "Product updated successfully"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};




export const deleteProductById = async (req , res) => {
    try{
        const deleteProductById = req.params.id;
        const productData = await products.findByIdAndDelete(deleteProductById);
        if (!productData) {
            return res.status(404).json({ message: "not found" });

        }
        return res.status(200).json({ success: true, productData , message :"Product deleted"});   
    }
    catch(error){
            res.status(500).json(error.message);
    }
}