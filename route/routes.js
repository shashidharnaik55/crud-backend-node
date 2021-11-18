const express = require("express");

const getUser = require("../controller/userController");
const addUser = require("../controller/userController");
const getUserById = require("../controller/userController");
const editUser = require("../controller/userController");
const deleteUser = require("../controller/userController");

const route = express.Router();

route.get("/", getUser);
route.post("/add", addUser);
route.get("/:id", getUserById);
route.put("/:id", editUser);
route.delete("/:id", deleteUser);

module.exports = route;
