const express = require('express');
const router = express.Router();
const { FlightController } = require('../../controllers');
const { FlightMiddlewares, UniversalMiddlewares } = require('../../middlewares');

// /api/v1/flights POST
router.post('/', 
        FlightMiddlewares.validateCreateRequest,
        FlightController.createFlight);


router.get('/', 
        FlightController.getAllFlights);     
       
// /api/v1/flights/:id GET        
router.get('/:id', 
        FlightController.getFlight);     

// /api/v1/flights/:id/seats PATCH
router.patch(
        '/:id/seats', 
        FlightMiddlewares.validateUpdateSeatsRequest,
        FlightController.updateSeats
);


module.exports = router;