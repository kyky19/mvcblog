const { Post } = require("../models");

const postSeeds = [
  {
    title: "Welcome to NDL Takes!",
    post_text: "Post any take you want!",
    user_id: 1,
  },
  {
    title: "Seed Post",
    post_text: "This is a seed post!",
    user_id: 3,
  },
  {
    title: "Another Seed",
    post_text: "Anotha one",
    user_id: 2,
  },
  {
    title: "And Again",
    post_text: "This a seed",
    user_id: 4,
  },
  {
    title: "Last Time!",
    post_text: "Last seed",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postSeeds);

module.exports = seedPosts;
