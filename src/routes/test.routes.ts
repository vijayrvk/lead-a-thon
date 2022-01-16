import * as express from 'express';
import { Router, Request, Response } from 'express';

export function test(): Router {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    try {
      res.send('Lead scrape is working');
    } catch(err) {
      console.error(err);
      res.status(500).send('Could not complete request');
    }
  });

  return router;
}
