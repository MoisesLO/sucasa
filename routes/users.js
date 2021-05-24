var express = require('express');
var router = express.Router();
var url = require('url');


function getFormattedUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host')
  });
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
