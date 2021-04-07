# Weather-App

This is a Weather Application. It is developed on node.js. 
There are 2 main files index.js and index.html. When the server gets live at port 3000, it sends the index.html file as a response. Then the user fills in the required data and hits the submit button. This data is sent to the server as a post request where the individual chunks of data are extracted using the "body-parser" module of npm. 
A URL is prepared using this extracted data and send to Open Weather API using the "https" module via an https.get request. The API sends back the required data. This data is converted to JSON format. Through this format, the server extracts the required data and sends it back (displays it) as its response.


<img src="images/Screenshot 2021-04-07 at 3.24.50 PM.png" alt="Input Image" width="40%">
<img src="images/Screenshot 2021-04-07 at 2.51.21 PM.png" alt="Input Image" width="40%">


