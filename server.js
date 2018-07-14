import Express from 'express';
import BodyParser from 'body-parser';
import FileUpload from 'express-fileupload';
import ImageSize from 'image-size';

const server = Express();
const rootPath = './dist';
const port = 38080;

server.use(Express.static(rootPath));

// parse application/x-www-form-urlencoded
server.use(BodyParser.urlencoded({
  extended: false
}))
// parse application/json
server.use(BodyParser.json())

// Allow CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

server.post('/submit/create-account', (req, res) => {
  console.log('body', req.body);
  res.send('OK');
});
console.log('post', '/submit/create-account');

server.listen(port);
console.log(`Server running at http://127.0.0.1:${port}`);
