import express from 'express';
import cors from 'cors';
import customerRoutes from "./routes/customer-routes";
import itemRoutes from "./routes/item-routes";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",  // Allow frontend requests
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
}));

app.use('/customer',customerRoutes);
app.use('/item',itemRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});