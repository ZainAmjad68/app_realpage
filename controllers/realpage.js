exports.init = async function (req, res) {
  try {
    req.log.info('This is the RealPage base route.');
    return res.status(responseStatus).message("RealPage App Reached.!");
  } catch (err) {
    req.log.info("Error: failed to load the RealPage main endpoint.", { err: err });
    res.status(err.statusCode || 500).send(err.message);
  }
};
