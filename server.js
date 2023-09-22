const config = require("./config/index");
const app = require("./app");

const port = config.get("Port") || 8080;
app.listen(port, () => console.log(`RealPage Server - listening on port ${port}.`));

//      /api/realpage/v1/
