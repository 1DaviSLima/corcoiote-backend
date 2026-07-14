import { Router } from "express";
import * as InvoicesController from "../controllers/invoices.controller.ts";

const router = Router();

router.get("/", InvoicesController.getAllInvoices);
router.get("/:id", InvoicesController.getInvoicesById);
router.post("/", InvoicesController.createInvoicer);
router.put("/:id", InvoicesController.updateInvoicer);
router.delete("/:id", InvoicesController.deleteInvoicer);

export default router;