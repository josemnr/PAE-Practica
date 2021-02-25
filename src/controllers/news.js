const path = require('path');
const NewsAPI = require('newsapi');
const API_KEY = "2f2ef6f079f6471c9e88edf4e0d4d2e4";
const newsapi = new NewsAPI(API_KEY);
const News = require("../model/news");

exports.renderHomePage = (req, res) => {
  res.render("index")
}

exports.getNews = (req, res) => {
  const topic = req.body.topic
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const news = new News(req.body.topic)
  new.validateUserInput()
  if(weather.errors.length)
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