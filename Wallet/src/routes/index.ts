import { Router } from 'express';

const routes = Router();

routes.use('', (_request, response) => {
  response.json({ status: 'Running' });
});

export default routes;
