const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middleware);
server.use(router);

server.listen(8000, () => {
  try {
    console.log("server is running");
  } catch (error) {
    console.log(error);
  }
});
