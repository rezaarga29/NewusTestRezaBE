const categoriesController = require("../controllers/categoriesController");

const router = require("express").Router();

router.post("/", categoriesController.postCategories);
router.get("/", categoriesController.getCategories);
router.get("/:id", categoriesController.getCategoriesById);
router.put("/:id", categoriesController.putCategoriesById);
router.delete("/:id", categoriesController.deleteCategoriesById);

module.exports = router;
