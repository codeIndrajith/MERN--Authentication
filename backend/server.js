// If you add "type": "module" in package.json file. You will access to import syntax.

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/erroMiddleware.js';
const PORT = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running to PORT ${PORT}`));
