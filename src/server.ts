import express from "express";

const app = express();

const users = [
	{
		name: "Cristiano Ronaldo",
		status: true,
	},
	{
		name: "Lionel Messi",
		status: true,
	},
	{
		name: "Neymar",
		status: false,
	},
];

app.use(express.json());

app.get("/", (_request, response) => {
	response.json({ message: "Hello!" });
});

app.get("/users", (_request, response) => {
	response.json(users);
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
