import { Router } from 'express';
import { validateAuthHeader } from '../middlewares/validators/auth';
import transactions from './transactions';
import swagger from './swagger';

const routes = Router();

routes.use(swagger);
routes.use(validateAuthHeader);
[transactions].forEach(route => routes.use(route));

export default routes;
