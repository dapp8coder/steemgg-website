'use strict';

var formidable = require('formidable'),
    fs = require('fs'),
    path = require('path'),
    util = require('util'),
    steem = require('steem'),
    request = require('request'),
    url = require('url');

exports.auth = function(req, res, next) {
    res.redirect(url.format({
       pathname:"./me",
       query: {
          "token": req.query.access_token
        }
     }));
};

