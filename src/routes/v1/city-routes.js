const express = require('express');
const router = express.Router();
const { CityController } = require('../../controllers');
const { CityMiddlewares, UniversalMiddlewares } = require('../../middlewares');

// /api/v1/cities POST
router.post('/', 
    CityMiddlewares.validateCreateRequest,
    CityController.createCty);

// /api/v1/cities/:id DELETE
router.delete('/:id', 
        CityController.destroyCity);

// /api/v1/citites/:id / Patch 
router.patch('/:id', 
        UniversalMiddlewares.noIdInRequestPayload,
        CityMiddlewares.validateUpdateRequest,
        CityController.updateCity
)


module.exports = router;