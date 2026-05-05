import express from 'express';
import api from './api/index.js';
import cors from 'cors';

const app = express();
const hostname = '0.0.0.0';
const port = 3000;

app.use(cors());

app.use(express.json());
app.use('/api', api);

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
