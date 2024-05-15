const Post = require("./Post");

class PostService {
  async create(post) {
    return await Post.create(post);
  }
  async getAll(query) {
    return await Post.find(query);
  }
  async getById(id) {
    if (!id) throw new Error("Не указан Id");
    return await Post.findById(id);
  }
  async deleteById(id) {
    if (!id) throw new Error("Не указан Id");
    return await Post.findByIdAndDelete(id);
  }
  async updateById(id, body) {
    if (!id) throw new Error("Не указан Id");
    return await Post.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
}

module.exports = new PostService();
