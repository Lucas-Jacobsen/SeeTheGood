import express from "express";
import { getAllUsers, createUser } from "./user.controller";

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);

  export default userRouter; 