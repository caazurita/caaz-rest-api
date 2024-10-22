import "dotenv/config";
import express from 'express';
import cors from 'cors';

import route from './routes';
import dbConnect from './config/db';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(route);
dbConnect().then(() => {
    console.log('Database connected');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})