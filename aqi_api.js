var pm25 = require('pm25in');

pm25.token = "5j1znBVAsnSf5xQyNQyq";
pm25.aqi_ranking(function(err, data){
  console.log(err, data);
});
