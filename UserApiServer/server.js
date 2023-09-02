import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// import Profile from './models/userModels.js';
import usersRoute from './router/userRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Hello, Welcome...' });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
