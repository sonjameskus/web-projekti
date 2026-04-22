import express from 'express';
import api from './api/index.js';

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use('/api', api);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
