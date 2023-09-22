var convict = require("convict");

module.exports = convict({
  environment: {
    doc: "Specifies the running environment of tels-integration-api",
    format: String,
    env: "NODE_ENV",
    default: "development",
  },
  Port: {
    doc: "Port to use for the server.",
    format: Number,
    default: 8080,
  },
  realpage: {
    baseUrl: {
      doc: "RealPage's environment url.",
      format: String,
      default: "To Be Configured",
    },
  },
});
