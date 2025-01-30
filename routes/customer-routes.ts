import express from "express";
import Customer from "../model/Customer";
import {addCustomers, deleteCustomer, getAllCustomers, updateCustomers} from "../database/customer-data-store";

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

router.put('/update/:email', async(req, res) => {
    const email = req.params.email;
    const customer: Customer = req.body;
    try {
        await updateCustomers(email, customer);
        res.send('Customer Updated');
    } catch (e) {
        console.error('Error Updating Customer',e);
        res.status(500).send('Error Updating Customer');
    }
});

router.get('/view', async(req, res) => {
    try {
        const customers = await getAllCustomers();
        res.send(customers);
    } catch (e) {
        console.error('Error Getting All Customers',e);
        res.status(500).send('Error Getting All Customers');
    }
});

export default router;