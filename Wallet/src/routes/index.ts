import { Router } from 'express';
import transactions from './transactions';

const routes = Router();

[transactions].forEach(route => routes.use(route));

export default routes;
