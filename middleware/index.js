const bunyan = require("bunyan");
const { v4: uuidv4 } = require("uuid");

function loadLogger(req, res, next) {
  req.log = bunyan.createLogger({
    name: "tels-logger",
    req_id: _.has(req.headers, "X-Amzn-Trace-Id")
      ? req.headers["X-Amzn-Trace-Id"]
      : uuidv4(),
    serializers: { err: bunyan.stdSerializers.err },
  });
  next();
}

module.exports = {
    loadLogger: loadLogger,
};
  