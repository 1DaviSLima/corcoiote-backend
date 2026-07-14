import { invoiced } from "../moks/invoices.moks.ts";
import type { CreateInvoice, Invoices, UpdateInvoice } from "../moks/types.ts";

export function findAllInvoiced(): Invoices[] {
    return invoiced;
}

export function findInvoicedById(id: number): Invoices {
    const invoicer = invoiced.find((invoicer) => {
        return invoicer.id === id;
    })
    if (!invoicer) {
        throw new Error("Cliente nao encontrado")
    }
    return invoicer; 
}

export function inserchInvoiced({ value }: CreateInvoice): Invoices {
    const id = invoiced[invoiced.length - 1].id;
    const invoicerid = invoiced[invoiced.length - 1].invoicerId;

    const invoicer: Invoices = {
        id: id + 1,
        value,
        invoicerId:invoicerid + 1,
        status: "pendding",
        createdAt: new Date().toLocaleDateString("pt-BR"),
    };
    invoiced.push(invoicer);
    return invoicer
}

export function modifyInvoicer( id: number, { value, status }: UpdateInvoice): Invoices {
    const invoicer = invoiced.find((invoicer) => {
        return invoicer.id === id
    });
    if (!invoicer) {
        throw new Error("Cliente nao encontrado")
    }
    if (value) invoicer.value === value;
    if (status !== undefined) invoicer.status === status;

    return invoicer;
}

export function removeInvoicer(id: number): void {
    const index = invoiced.findIndex((invoicer) => {
        return invoicer.id === id;
    })
    if (index === -1) {
        throw new Error("Cliente nao encontrado");
    }
    invoiced.slice(index, 1);
}