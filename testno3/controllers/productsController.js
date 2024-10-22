const category = require("../models").Category;
const product = require("../models").Product;
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class ProductController {
  static async postProduct(req, res, next) {
    try {
      const { name, desc, category_id } = req.body;
      const file = req.files.image ? req.files.image[0] : null;

      if (!name || !desc || !category_id) {
        throw { name: "EmptyInput" };
      }

      if (!file) {
        throw { name: "FileRequired" };
      }

      const base64String = file.buffer.toString("base64");
      const dataUrl = `data:${file.mimetype};base64,${base64String}`;
      const result = await cloudinary.uploader.upload(dataUrl, {
        public_id: file.originalname,
        folder: "gc1p2",
      });

      let data = await product.create({
        name,
        desc,
        image: result.secure_url,
        category_id,
      });

      res.status(201).json({ message: "New Product Created", data });
    } catch (error) {
      next(error);
    }
  }

  static async getProduct(req, res, next) {
    try {
      let data = await product.findAll({
        include: [
          {
            model: category,
          },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req, res, next) {
    try {
      let { id } = req.params;
      let data = await product.findByPk(id, {
        include: [
          {
            model: category,
          },
        ],
      });
      if (!data) {
        throw { name: "NotFound" };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async putProductById(req, res, next) {
    try {
      let { id } = req.params;
      if (Object.keys(req.body).length === 0) {
        throw { name: "EmptyInput" };
      }
      let data = await product.findByPk(id);
      if (!data) {
        throw { name: "NotFound" };
      }
      await data.update(req.body);
      res
        .status(200)
        .json({ message: `Successfully updated product with id ${id}`, data });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProductById(req, res, next) {
    try {
      let { id } = req.params;
      let data = await product.findByPk(id);
      if (!data) {
        throw { name: "NotFound" };
      }
      await data.destroy();
      res
        .status(200)
        .json({ message: `${data.name} successfully deleted`, data });
    } catch (error) {
      next(error);
    }
  }

  static async patchProductById(req, res, next) {
    try {
      let data = await product.findByPk(req.params.id);
      if (!data) {
        throw { name: "NotFound" };
      }
      if (!req.file) {
        throw { name: "FileRequired" };
      }
      let base64String = req.file.buffer.toString("base64");
      let dataUrl = `data:${req.file.mimetype};base64,${base64String}`;

      let result = await cloudinary.uploader.upload(dataUrl, {
        public_id: req.file.originalname,
        folder: "gc1p2",
      });

      await data.update({ image: result.secure_url });

      res.status(200).json({ message: `Image ${data.name} success to update` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
