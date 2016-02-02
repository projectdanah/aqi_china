var router = require('express').Router();

var controller = require('./nodemodule.controller.js');

module.exports = router;

router.get('/', controller.index);

// router.post('/', controller.create);
router.get('/aqi', controller.index);

router.post('/aqi', controller.create);


