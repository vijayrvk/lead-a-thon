import * as express from 'express';
import { Router } from 'express';
import { getAllData } from './scrape.routes';
import { test } from './test.routes';


export function routerIndex(): Router {
  const router = express.Router();
  router.use('/test', test());
  router.use('/scrape', getAllData());
  return router;
}
