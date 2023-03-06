import express from 'express';
import {signin, signup, updateProfile} from '../controller/userController.js'
import { isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.post('/signin', signin);

userRouter.post('/signup', signup);

userRouter.put('/profile', isAuth, updateProfile)

export default userRouter;
