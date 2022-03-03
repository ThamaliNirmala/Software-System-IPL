const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  about: {
    type: String,
  },
  photoURL: {
    type: String,
  },
});

const Profile = mongoose.model("profile", ProfileSchema);
module.exports = Profile;
