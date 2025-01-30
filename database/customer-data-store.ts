import {PrismaClient} from "@prisma/client";
import Customer from "../model/Customer";

const prisma = new PrismaClient();

export async function addCustomers(customers: Customer) {
    try {
        const customer  = await prisma.customer.create({
            data: {
                name: customers.name,
                email: customers.email,
                phone: customers.phone
            }
        });
        console.log('Customer Added: ', customer);
    } catch (e) {
        console.error('Error Adding Customer',e);
    }
}

export async function deleteCustomer(email: string) {
    try {
        await prisma.customer.delete({
            where: {email: email}
        });
    } catch (e) {
        console.error('Error Deleting Customer',e);
    }
}

export async function getAllCustomers() {
    try {
        return await prisma.customer.findMany();
    } catch (e) {
        console.error('Error Getting All Customers',e);
    }
}

export async function updateCustomers(email: string, customers: Customer) {
    try {
        await prisma.customer.update({
            where: {email: email},
            data: {
                name: customers.name,
                email: customers.email,
                phone: customers.phone
            }
        });
    } catch (e) {
        console.error('Error Updating Customer',e);
    }
}