import express from 'express';
import { getProductById,deleteProductById,getProductByuser, getProductsData, postProductData,updateProductById } from '../controllers/product.js';

const ProductRoute = express.Router();

ProductRoute.post("/postproduct" , postProductData);
ProductRoute.get("/getproduct", getProductsData);
ProductRoute.get("/getproduct/:id", getProductById);
ProductRoute.get("/getproductuser", getProductByuser);
ProductRoute.post("/updateproduct/:id", updateProductById);
ProductRoute.delete("/deleteproduct/:id", deleteProductById);

export default ProductRoute