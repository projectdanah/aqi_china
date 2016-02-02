var cheerio = require('cheerio');
// var Promise = require('bluebird');
// var request = Promise.promisify(require('request'));
var request = require('request');
// var async = require('async');
var CronJob = require('cron').CronJob;
var mongoose = require('mongoose');
var Aqi = require('./server/api/modules/nodemodule.model');

var chinaCityUrls = [
                    { url: "http://www.stateair.net/web/post/1/1.html", name: 'Beijing'},
                    { url: "http://www.stateair.net/web/post/1/2.html", name: 'Chengdu'},
                    { url: "http://www.stateair.net/web/post/1/3.html", name: 'Guangzhou'},
                    { url: "http://www.stateair.net/web/post/1/4.html", name: 'Shanghai'},
                    { url: "http://www.stateair.net/web/post/1/5.html", name: 'Shenyang'}
                  ];


function scrapeAqiData(){
  chinaCityUrls.forEach(function(city){
  // scrape that bitch
    request(city, function(err, response, body){
      var $ = cheerio.load(body);
      var aqiData = {}
      aqiData.country = city.name
      $('.currentExposure table tr').each(function(i, row){
        if (i===0) {
          aqiData.time = $(row).text().trim().split("\n")[3].trim()
        } else if (i===1){
          aqiData.aqi = $(row).text().trim().replace(/AQI/gi, '').trim()
        } else if (i===2){
          aqiData.status = $(row).text().trim()
        } else if (i===4){
          aqiData.concentration = $(row).text().replace(/\s+/g, '').replace(/concentration:/gi, '')
        }
      })
      Aqi.create(aqiData, function(err, data){
        if(err) return next(err);
        console.log('DID WE GET DATA?', data)
      });
    })
  })
}


var job = new CronJob({
  cronTime: '0 0 * * * *',
  // cronTime: '*/5 * * * * *',
  onTick: function() {
    scrapeAqiData()
  },
  start: false
});


module.exports = job
