const NewsAPI = require('newsapi');
const {config} = require('../../config');
const newsapi = new NewsAPI(config.api_key);
const News = require("../models/news");

exports.renderHomePage = (req, res) => {
  res.render("index")
}

exports.getNews = (req, res) => {
  const topic = req.body.topic
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const news = new News(req.body.topic)
  news.validateUserInput()
  if(news.errors.length){
    console.log("No hay nada escrito")
  }else{
    newsapi.v2.everything({
      q: topic,
      from: date,
      sortBy: 'relevancy',
    }).then(response => {
      console.log(response.articles);
      res.render("index", {
        news: response.articles
      })
    }).catch((error) => {
      console.log(error)
    });
  }
}