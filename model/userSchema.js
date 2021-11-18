const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");
const user = mongoose.model("user", userSchema);

module.exports = user;
