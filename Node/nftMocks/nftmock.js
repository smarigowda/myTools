// Description
// This is a Moc which exposes getHeaders prfunction

var rewire = require('rewire');
// var dcmService = require('./lib/dcmService');
var myModule = rewire("./lib/dcmService");

// console.log(myModule);
// console.log(rewire);
// console.log('hello rewire...');

// var scode = myModule.__get__("successCodes");

// exports.getHeaders = getHeaders = myModule.__get__("getHeaders");

// get the private function getHeaders
var getHeaders = myModule.__get__("getHeaders");

// module.exports = { getHeaders: }
// console.log(scode);
// console.log(headers);

// console.log(headers2('/dcm/id', 'GET', '{ "id": 1 }', 'SSO-932747398723ehfkahfkjhadskfewurwueriuhqwe'));

        // Added by NFT
        // To test HMAC function in isolation
exports.addRoutes = function (app) {
        app.get('/getHeaders', function(req, res) {
            var ssoToken = req.query.skySSO;
            var id = req.query.id;
            var name = req.query.name;
            var body_id = req.query.body_id;
            var body_name = req.query.body_name;
            var body_type = req.query.body_type;
            var body_platform = req.query.body_platform;
            // console.log(body_id);
            // console.log(body_name);
            // console.log(body_type);
            // console.log(body_platform);
            // getHeaders('/dcm/id', 'GET', '{"id":"1","name":"Marcs PC New","type":"COMPUTER","platform":"PC","details":{}}', ssoToken);
            getHeaders('/dcm/id', 'GET', '{"id":"' +  body_id + '","name":"' +  body_name + '","type":"' +  body_type + '","platform":"' +  body_platform + '","details":{}}', ssoToken);
            res.end('Executed getHeaders function.....');
        });
};
