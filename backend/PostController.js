const PostService = require("./PostService");

class PostController {
  async create(req, res) {
    try {
      const product = await PostService.create(req?.body, req.files);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const product = await PostService.getAll(req?.query);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getById(req, res) {
    const { id } = req.params;
    try {
      const product = await PostService.getById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const product = await PostService.deleteById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateById(req, res) {
    const { id } = req?.body;
    try {
      const product = await PostService.updateById(id, req?.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async uploadFile(req, res) {
    try {
      console.log(req?.files);
      const file = await PostService.uploadFile(req?.files);
      res.status(200).json(file);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
