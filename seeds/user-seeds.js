const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userSeed = [
  {
    username: "test1",
    email: "test1@gmail.com",
    password: "password69",
  },
  {
    username: "test2",
    email: "test2@gmail.com",
    password: "password69",
  },
  {
    username: "test3",
    email: "test3@gmail.com",
    password: "password69",
  },
  {
    username: "test4",
    email: "test4@gmail.com",
    password: "password69",
  },
  {
    username: "test5",
    email: "test5@gmail.com",
    password: "password69",
  },
];

const seedUsers = () => User.bulkCreate(userSeed, { individualHooks: true });

module.exports = seedUsers;
