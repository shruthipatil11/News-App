var express = require('express');
var router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a31c15e1e2a6416e937565e7de648578');
/* GET users listing. */
router.get('/', function(req, res, next) {
  
console.log("inside searchNews",req.query.phrase);
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: `${req.query.phrase}`,
  sortBy: 'publishedAt',
}).then(response => {
  console.log(response);
  res.send(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
});

module.exports = router;