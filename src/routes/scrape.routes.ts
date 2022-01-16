import * as express from 'express';
import { Router, Request, Response } from 'express';
import { getAllDataController, getSpecificMoveController } from '../controllers/scrape';

export function getAllData(): Router {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    try {
        getAllDataController(req, res);
    } catch(err) {
      console.error(err);
      res.status(500).send('Could not complete request');
    }
  });

  router.get('/:move', async (req: Request, res: Response) => {
    try {
        getSpecificMoveController(req, res);
    } catch(err) {
      console.error(err);
      res.status(500).send('Could not complete request');
    }
  });

  return router;
}
