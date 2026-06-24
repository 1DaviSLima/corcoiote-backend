import http, { request } from "node:http";

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

http
	.createServer((request, response) => {
		if (request.url === "/users" && request.method === 'GET') {
			response.writeHead(200, {
				"content-type": "application/json",
			});
			return;
		}
		response.end(JSON.stringify(users));
		response.writeHead(404, { "content-type": "text-plain" });
		response.end("Not Found!");
	})
	.listen(Number(process.env.PORT));
