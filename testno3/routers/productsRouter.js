const productsController = require("../controllers/productsController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = require("express").Router();

router.post(
  "/",
  upload.fields([
    { name: "image" },
    { name: "name" },
    { name: "desc" },
    { name: "category_id" },
  ]),
  productsController.postProduct
);
router.get("/", productsController.getProduct);
router.get("/:id", productsController.getProductById);
router.put("/:id", productsController.putProductById);
router.delete("/:id", productsController.deleteProductById);
router.patch(
  "/:id",
  upload.single("image"),
  productsController.patchProductById
);

module.exports = router;
