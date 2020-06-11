import { Router } from 'express';
import multer from 'multer'

import uploadConfig from '@config/upload';

import PointsController from '../controllers/PointsController';

const pointsRouter = Router();
const upload = multer(uploadConfig);

const pointsController = new PointsController();

pointsRouter.post('/', upload.single('image'), pointsController.create);
pointsRouter.get('/', pointsController.index);
pointsRouter.get('/:id', pointsController.show);

export default pointsRouter;
