'use strict';
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser')
var app = express();
let endPoint = '/processData'
let listenPort = 8082
app.use(bodyParser.json({type: ['application/json', 'application/csp-report']}));

app.post(endPoint, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body);
  res.sendStatus(201)
})

http.createServer(app).listen(listenPort);
