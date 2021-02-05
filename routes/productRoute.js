const express = require('express');
const router = express.Router();
const productController = require("./../controllers/productController");

router.get("/product", productController.getProduct);
router.post("/product", productController.saveProduct);


module.exports = router;