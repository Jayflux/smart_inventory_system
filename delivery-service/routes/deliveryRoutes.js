const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');


router.get('/', deliveryController.getDeliveries);
router.get('/:id', deliveryController.getDelivery);
router.post('/', deliveryController.createDelivery);
router.put('/:id', deliveryController.updateStatus);
router.delete('/:id', deliveryController.deleteDelivery);

module.exports = router;
