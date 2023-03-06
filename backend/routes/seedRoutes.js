import express from 'express';
import { seed } from '../controller/seedController.js';

const seedRouter = express.Router();

seedRouter.get('/', seed);

export default seedRouter;
