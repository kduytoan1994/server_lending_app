var express = require('express');
var router = express.Router();
var url = require('url');
var response = require('./../tools/response');
var config = require('../../connection/config');
var model = require("../../model/model");

/* POST get homestay information. */

router.post('/getInformation', function (req, res) {
    var id = req.body.id;

    if (typeof id !== "string")     response.returnWrongPOST(res);

    config.templatePostFunction(  
        config.command.getHomestay, 
        {id: id}, 
        function(result) {
            response.returnFormPOST(res, result);
        },
        function(error) {
            // for test
            // var result = {status: response.status.success, data: {homestay: model.homestay}};
            // response.returnFormPOST(res, result);
            response.returnErrorConnect(res);
        }
    );
        
});

module.exports = router;