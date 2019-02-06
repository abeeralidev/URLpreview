const express = require('express');
const cors = require('cors');
var preview = require("page-previewer");
var urlFormat = require('format-url');
const app = express();
app.use(cors())


app.get('/', function (req, res) {
res.send({status:'Preview Link Service'})
   });

app.get('/PreviewImage', async (req, res) => {
    var url = urlFormat(req.query.url)
    console.log(url);
    preview(url, function(err, data) {
    if(!err) {
        console.log('success');
        res.send({status:'success',data})
    }
    else{
        res.send({status:'failed'})
    }
});

   });
   

   app.listen(8080,() => {
    console.log('We are live on ' + 8080);
  });