export type Customer = {
    id: number;
    name: string;
    email: string;
    status: boolean;
};
export type CreateCustomer = Omit<Customer, "id" | "status">;
type CustomerWithoutId = Omit<Customer, "id">;
export type UpdateCustomer = Partial<CustomerWithoutId>;

export type Invoices = {
    id: number;
    value: number;
    invoicerId: number;
    status: "pendding" | "paid";
    createdAt:string;
}
export type CreateInvoice = Pick<Invoices, "value">
export type UpdateInvoice = Partial<
Omit<Invoices, "id" | "invoicerId" | "createdAt">
>;