import express from "express";
import CustomerRouter from "./Routes/customer.routes.ts";
import InvoicesRouter from "./Routes/invoices.routes.ts"

const app = express();

app.use(express.json());

app.use('/customers', CustomerRouter);
app.use('/invoices', InvoicesRouter);

app.use((_request, response) => {
	response.status(404).json({massage: 'not found!'})
});

app.listen(Number(process.env.PORT));

// import http, { request } from "node:http";

// const users = [
// 	{
// 		name: "Cristiano Ronaldo",
// 		status: true,
// 	},
// 	{
// 		name: "Lionel Messi",
// 		status: true,
// 	},
// 	{
// 		name: "Neymar",
// 		status: false,
// 	},
// ];

// http
// 	.createServer((request, response) => {
// 		if (request.url === "/users" && request.method === 'GET') {
// 			response.writeHead(200, {
// 				"content-type": "application/json",
// 			});
// 			return;
// 		}
// 		response.end(JSON.stringify(users));
// 		response.writeHead(404, { "content-type": "text-plain" });
// 		response.end("Not Found!");
// 	})
// 	.listen(Number(process.env.PORT));
