
const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};
