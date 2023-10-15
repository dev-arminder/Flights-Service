const express = require('express');
const router = express.Router();
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

// /api/v1/cities POST
router.post('/', 
    CityMiddlewares.validateCreateRequest,
    CityController.createCty);


module.exports = router;