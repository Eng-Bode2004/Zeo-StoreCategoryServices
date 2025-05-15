const ShopCategoryController = require("../Controllers/StoreCategoryController");

const express = require("express");
const router = express.Router();


router.post("/",ShopCategoryController.createStoreCategory);
router.get("/",ShopCategoryController.getAllStoreCategories);


module.exports = router;
