var router = require('express').Router();

var controller = require('./nodemodule.controller.js');

module.exports = router;

router.get('/', controller.index);

router.get('/aqi', controller.index);
router.get('/aqi/:country', controller.country)
router.post('/aqi', controller.create);


