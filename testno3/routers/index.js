const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello Newus Technology!");
});
router.use("/products", require("./productsRouter"));
router.use("/categories", require("./categoriesRouter"));

module.exports = router;
