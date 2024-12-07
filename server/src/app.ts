import express, { Request, Response } from 'express';
import router from './routes/routes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/api",router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;