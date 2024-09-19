import express from 'express';
import { getUserById,deleteUserById, getUsersData, postUserData, updateUserById } from '../controllers/user.js';

const userRoute = express.Router();

userRoute.post("/createuser" , postUserData);
userRoute.post("/update/:id", updateUserById);

userRoute.get("/get", getUsersData);
userRoute.get("/get/:id", getUserById);
userRoute.delete("/delete/:id", deleteUserById);

export default userRoute