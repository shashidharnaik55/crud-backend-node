const User = require("../model/userSchema");

const getUser = async (req, res) => {
  try {
    let user = await User.save();
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = getUser;

const addUser = async (req, res) => {
  const user = request.body;
  const newUser = User(user);

  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = addUser;

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = getUserById;

const editUser = async (req, res) => {
  const user = req.body;
  const editUser = new User(user);

  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.json(editUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = editUser;

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.json("User deleted Successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = deleteUser;
