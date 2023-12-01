// If you add "type": "module" in package.json file. You will access to import syntax.

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/erroMiddleware.js';
import connectDB from './config/db.js';
const PORT = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());

// database connection
connectDB();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running to PORT ${PORT}`));
