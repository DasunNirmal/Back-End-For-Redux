import {PrismaClient} from "@prisma/client";
import Item from "../model/Item";

const prisma = new PrismaClient();

export async function addItems(item: Item) {
    try {
        const newItem = await prisma.item.create({
            data: {
                code: item.code,
                itemName: item.itemName,
                qty: item.qty
            }
        });
        console.log('Item Added: ', newItem);
    } catch (e) {
        console.error('Error Adding Item',e);
    }
}

export async function deleteItem(code: string) {
    try {
        await prisma.item.delete({
            where: {code: code}
        });
    } catch (e) {
        console.error('Error Deleting Item',e);
    }
}

export async function getAllItems() {
    try {
        return await prisma.item.findMany();
    } catch (e) {
        console.error('Error Getting All Items',e);
    }
}

export async function updateItem(code: string, item: Item) {
    try {
        await prisma.item.update({
            where: {code: code},
            data: {
                code: item.code,
                itemName: item.itemName,
                qty: item.qty
            }
        });
    } catch (e) {
        console.error('Error Updating Item',e);
    }
}