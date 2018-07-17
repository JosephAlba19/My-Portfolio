const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.render("jAlbaPortfolio");
});

app.listen(process.env.PORT, process.env.IP);


