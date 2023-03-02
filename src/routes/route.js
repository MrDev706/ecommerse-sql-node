const express = require('express');
// const { json } = require('express/lib/response');
// const ucontroller = require('../controller/controller')
// const middle = require('../middlewares/middl1')
const vendorController = require("../controller/vendorController")

 const cart = require("../controller/cartController")

const router = express.Router();




router.post('/vendor', vendorController.createVendor)

router.get("/vendor/:vendorId", vendorController.getVendor)


router.post("/user/:userId/product", middle.validator1, ucontroller.createIntern)

router.get("/product", ucontroller.collegeDetails)


router.post("/category", middle.validator1, ucontroller.createIntern)

router.get("/category", ucontroller.collegeDetails)


router.post("/users/:userId/cart" , cart.createCart)

router.put ("/users/:userId/cart" , cart.updateCart)

router.get("/users/:userId/cart" ,cart.getCart)

router.delete("/users/:userId/cart", cart.deleteCart)



module.exports = router;
// adding this comment for no reason