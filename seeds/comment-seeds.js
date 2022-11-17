const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "And comment on any post too!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "cool",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "cool",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "cool",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: "cool",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
