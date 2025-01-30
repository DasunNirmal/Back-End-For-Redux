import express from 'express';
import customerRoutes from "./routes/customer-routes";

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/customer',customerRoutes);
app.use('/item');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});