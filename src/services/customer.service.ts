import { customers } from "../moks/customer.moks.ts";
import type { CreateCustomer, Customer, UpdateCustomer } from "../moks/types.ts";

function findAllCustomers(): Customer[] {
    return customers;
}

function findCustomerById(id: number): Customer {
    const customer = customers.find((customer) => {
       return customer.id === id;
    });
    if (!customer) {
        throw new Error('Cliente não encontrado.')
    }

    return customer;
}

function insertCustomer({ name, email }: CreateCustomer): Customer {
    const id = customers[customers.length - 1].id;
    const customer: Customer = {
        id: id + 1,
        name,
        email,
        status: true,
    };
    customers.push(customer);
    return customer
}

function modifyCustomer(
    id: number,
    { name, email, status }: UpdateCustomer
)
{
    const customer = customers.find((customer) => {
        return customer.id === id
    })

    if (!customer) {
        throw new Error('Cliente não encontrado')
    }
    if (name) customer.name === name
    if (email) customer.email === email
    if (status !== undefined) customer.status === status
}

function removeCustomer(id: number): void {
    const index = customers.findIndex((customer) => { 
        return customer.id === id
    })

    if (index === -1) {
        throw new Error('Cliente não encontrado');
    }
    customers.slice(index, 1);
}