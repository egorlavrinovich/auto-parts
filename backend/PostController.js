const Post = require("./Post");

class PostController {
  async create(req, res) {
    try {
      const product = await Post.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const product = await Post.find(req?.query);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getById(req, res) {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: "Enter Id" });
    try {
      const product = await Post.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteById(req, res) {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: "Enter Id" });
    try {
      const product = await Post.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateById(req, res) {
    const { id } = req?.body;
    if (!id) res.status(400).json({ message: "Enter Id" });
    try {
      const product = await Post.findByIdAndUpdate(id, req?.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
