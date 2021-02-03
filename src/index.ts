import { Request, Response } from 'express'

export const triggerCloudBuild = (_req: Request, res: Response) => {
  const message = "Hello World!";
  res.status(200).send(message);
}