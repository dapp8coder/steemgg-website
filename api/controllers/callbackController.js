'use strict';

var formidable = require('formidable'),
    fs = require('fs'),
    path = require('path'),
    util = require('util'),
    steem = require('steem'),
    request = require('request'),
    url = require('url');

exports.auth = function(req, res, next) {
    req.session.accessToken = req.query.access_token;
    res.redirect('./me');
};

