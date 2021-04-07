const https = require('https'); 
const express = require('express');
const bodyParser = require('body-parser');
const  app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/index.html");
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.City);
    console.log(req.body.Units);
    const query = req.body.City;
    const apiKey = "d8d54111a3f4033caf7e007b687750f6"
    const unit = req.body.Units;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data){
        const weatherJSON_Data = JSON.parse(data);
        const temp = weatherJSON_Data.main.temp;
        const weatherDescription = weatherJSON_Data.weather[0].description;
        const iconID = weatherJSON_Data.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/"+iconID+"@2x.png"
        var tempHTML = "<p>The Temperature is " + temp+ "</p>"
        var descriptionHTML = "<p>" + weatherDescription+ "</p>"
        res.write(tempHTML);
        res.write(descriptionHTML);
        res.write("<img src=" + imageURL + " alt='weather icon'>")
        res.send();
        })
    })
});

app.listen(port, function() {
    console.log("Server started on " + port);
});