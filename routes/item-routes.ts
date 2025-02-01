import express from "express";
import Item from "../model/Item";
import {addItems, deleteItem, getAllItems, updateItem} from "../database/item-data-store";

const router = express.Router();

router.post('/add', async(req, res) => {
    const item: Item = req.body;
    console.log(req.body)
    try {
        await addItems(item);
        res.send('Item Added');
    } catch (e) {
        console.error('Error Adding Item',e);
        res.status(500).send('Error Adding Item');
    }
});

router.delete('/delete/:code', async(req, res) => {
    const code = req.params.code;
    try {
        await deleteItem(code);
        res.send('Item Deleted');
    } catch (e) {
        console.error('Error Deleting Item',e);
        res.status(500).send('Error Deleting Item');
    }
});

router.patch('/update/:code', async(req, res) => {
    const code = req.params.code;
    const item: Item = req.body;
    try {
        await updateItem(code, item);
        res.send('Item Updated');
    } catch (e) {
        console.error('Error Updating Item',e);
        res.status(500).send('Error Updating Item');
    }
});

router.get('/get', async(req, res) => {
    try {
        const item = await getAllItems();
        res.send(item);
    } catch (e) {
        console.error('Error Getting All Items',e);
        res.status(500).send('Error Getting All Items');
    }
});

export default router;