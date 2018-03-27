#!/usr/bin/env node
const fetch = require('node-fetch');
const prettyjson = require('prettyjson');

fetch('http://ip-api.com/json')
    .then(res => res.json())
    .then(res => prettyjson.render(res))
    .then(console.log)
    .catch(err => console.log("## Error Connection failed\n", err))