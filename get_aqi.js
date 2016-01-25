// var router = require('express').Router();
var cheerio = require('cheerio');
// var Promise = require('bluebird');
// var request = Promise.promisify(require('request'));
var request = require('request');
// var async = require('async');

var chinaCityUrls = [
                    { url: "http://www.stateair.net/web/post/1/1.html", name: 'Beijing'},
                    { url: "http://www.stateair.net/web/post/1/2.html", name: 'Chengdu'},
                    { url: "http://www.stateair.net/web/post/1/3.html", name: 'Guangzhou'},
                    { url: "http://www.stateair.net/web/post/1/4.html", name: 'Shanghai'},
                    { url: "http://www.stateair.net/web/post/1/5.html", name: 'Shenyang'}
                  ];


chinaCityUrls.forEach(function(city){
  // scrape that bitch
  request(city, function(err, response, body){
    var $ = cheerio.load(body);
    var time;
    var aqi;
    var status;
    var concentration;
    var country = city.name
    $('.currentExposure table tr').each(function(i, row){
      if (i===0) {
        time = $(row).text().trim().split("\n")[3].trim()
      } else if (i===1){
        aqi = $(row).text().trim().replace(/AQI/gi, '').trim()
      } else if (i===2){
        status = $(row).text().trim()
      } else if (i===4){
        concentration = $(row).text().replace(/\s+/g, '').replace(/concentration:/gi, '')
      }
    })
    console.log("Country:", country, "Time:",time, "AQI:",aqi, "Status:", status, "Concentration", concentration)
  })

})
