import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import teachersRouter from '@modules/teachers/infra/http/routes/teachers.routes';
import profileRouter from '@modules/teachers/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/teachers', teachersRouter);
routes.use('/profile', profileRouter);
routes.use('/password', passwordRouter);

export default routes;
