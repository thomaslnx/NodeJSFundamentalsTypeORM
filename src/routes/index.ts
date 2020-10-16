import { Router } from 'express';

import transactionsRouter from './transactions.routes';
import categoriesRouter from './transactions.routes';

const routes = Router();

routes.use('/transactions', transactionsRouter);
routes.use('/categories', categoriesRouter);

export default routes;
