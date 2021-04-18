import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
const app = express();

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('Api running');
});
app.use('/api/products', productRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
