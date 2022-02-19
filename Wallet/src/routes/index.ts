import { Router } from 'express';
import { validateAuthHeader } from '../middlewares/validators/auth';
import transactions from './transactions';

const routes = Router();

routes.use(validateAuthHeader);

[transactions].forEach(route => routes.use(route));

export default routes;
