import Express from 'express';

const server = Express();
const rootPath = './dist';
const port = 38080;
server.use(Express.static(rootPath));
server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}`);
