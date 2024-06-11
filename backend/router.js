const Router = require("express");
const PostController = require("./PostController.js");

const router = new Router();

router.post("/posts", PostController.parseData);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getById);
router.put("/posts", PostController.updateById);
router.delete("/posts/:id", PostController.deleteById);

module.exports = router;
