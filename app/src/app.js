import express from 'express';
import api from './api/index.js';
import cors from 'cors';

const app = express();
const hostname = '0.0.0.0';
const port = 3000;

app.use(
	cors({
		origin: ['http://localhost:5173', 'https://web-projekti.vercel.app'],
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true,
	})
);

app.use(express.json());
app.use('/api', api);

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

export default app;
