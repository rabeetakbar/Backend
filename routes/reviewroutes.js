import express from 'express';
import { postReview,getReviewsData,getReviewByuser,deleteReviewById } from '../controllers/review.js';


const ReviewRoute = express.Router();

ReviewRoute.post("/postreview" , postReview);
ReviewRoute.get("/getreviews", getReviewsData);
ReviewRoute.get("/getreviewuser", getReviewByuser);
ReviewRoute.delete("/deletereview/:id", deleteReviewById);

export default ReviewRoute