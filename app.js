var http = require("http");
var url =
  "https://api.openweathermap.org/data/2.5/weather?q=BURSA,TR&appid=8d2c5db3402385e2d50b9122200bed2e&units=metric";

var server = http
  .createServer(function (request, response) {
    var request = require("request");
    request(url, function (err, res, body) {
      var data = JSON.parse(body);
      response.write("<html><body><div id ='container'>");
      response.write( "<h1>" + "City Name - : " + data["name"] + "<br>" + "</h1>");
      response.write(   "<h2>" + "Temperture - : " + data.main['temp'] +'<br>'+ "</h2>");
      response.write(   "<h2>" + "Sunset Time - : " + new Date(data.sys["sunset"] * 1000) + "</h2>");
      response.write("</div></body></html>");
    });
  })
  .listen(8081);
