import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  console.log("You hit me");
  res.send("Hello World!");
});

app.get('/test', async (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');

  while (true) {
    console.log(new Date().toISOString());

    // Wait 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
