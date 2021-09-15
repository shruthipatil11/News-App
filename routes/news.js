var express = require('express');
var router = express.Router();
require('dotenv').config();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

/* GET users listing. */
router.get('/', function(req, res, next) {
  

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  country: `${req.query.country}`
}).then(response => {
  console.log(response);
  res.send(response);

});
});

module.exports = router;
