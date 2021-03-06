import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import TeachersController from '../controllers/TeachersController';
import TeacherAvatarController from '../controllers/TeacherAvatarController';

const teachersRouter = Router();
const teachersController = new TeachersController();
const teacherAvatarController = new TeacherAvatarController();

const upload = multer(uploadConfig.multer);

teachersRouter.use(ensureAuthenticated);

teachersRouter.post('/', teachersController.create);
teachersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  teacherAvatarController.update,
);

export default teachersRouter;
