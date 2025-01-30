import express from "express";
import Customer from "../model/Customer";
import {addCustomers, deleteCustomer} from "../database/customer-data-store";

const router = express.Router();

router.post('/add', async(req, res) => {
    const customer: Customer = req.body;
    try {
        await addCustomers(customer);
        res.send('Customer Added');
    } catch (e) {
        console.error('Error Adding Customer',e);
        res.status(500).send('Error Adding Customer');
    }
});

router.delete('/delete/:email', async(req, res) => {
    const email = req.params.email;
    try {
        await deleteCustomer(email);
        res.send('Customer Deleted');
    } catch (e) {
        console.error('Error Deleting Customer',e);
        res.status(500).send('Error Deleting Customer');
    }
});

export default router;