import type { Request, Response } from "express";
import * as InvoicesService from "../services/invoices.service.ts";
import type { CreateInvoice, UpdateInvoice } from "../moks/types.ts";

export function getAllInvoices(request: Request, response: Response) {
    const invoicer = InvoicesService.findAllInvoiced();
    response.status(200).json(invoicer)
}

export function getInvoicesById(request: Request, response: Response) {
    const id = Number(request.params.id)
    const invoicer = InvoicesService.findInvoicedById(id);
    response.status(200).json(invoicer)
}

export function createInvoicer(request: Request, response: Response) {
    const { value } = request.body as CreateInvoice;
    const invoicer = InvoicesService.inserchInvoiced({value});
    response.status(201).json(invoicer);
}

export function updateInvoicer(request: Request, response: Response) {
    const id = Number(request.params.id);
    const { value, status } = request.body as UpdateInvoice;
    const invoicer = InvoicesService.modifyInvoicer(id, { value, status});
    response.status(200).json(invoicer);
}

export function deleteInvoicer(request: Request, response: Response) {
    const id = Number(request.params.id);
    InvoicesService.removeInvoicer(id);
    response.status(204).send();
}