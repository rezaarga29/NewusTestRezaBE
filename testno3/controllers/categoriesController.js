const product = require("../models").Product;
const category = require("../models").Category;

class CategoryController {
  static async postCategories(req, res, next) {
    try {
      console.log(req.body);
      let { name } = req.body;
      if (!name) {
        throw { name: "InvalidInput" };
      }
      let data = await category.create({ name });
      res.status(201).json({ message: "New Category Created", data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getCategories(req, res, next) {
    try {
      let data = await category.findAll({
        include: [
          {
            model: product,
          },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async getCategoriesById(req, res, next) {
    try {
      let { id } = req.params;
      let data = await category.findByPk(id, {
        include: [
          {
            model: product,
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

  static async putCategoriesById(req, res, next) {
    try {
      let { id } = req.params;
      let data = await category.findByPk(id);
      if (!data) {
        throw { name: "NotFound" };
      }
      data.update(req.body);
      res.status(200).json({ message: `success update id` + " " + id, data });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategoriesById(req, res, next) {
    try {
      let { id } = req.params;
      let data = await category.findByPk(id);
      if (!data) {
        throw { name: "NotFound" };
      }
      data.destroy();
      res.status(200).json({ message: `${data.name} success to delete`, data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
