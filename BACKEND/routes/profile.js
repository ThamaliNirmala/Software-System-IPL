const router = require("express").Router();
const Profile = require("../models/profile"); //import model

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const about = req.body.about;
  const photoURL = req.body.photoURL;

  const newProfileData = {
    name,
    email,
    about,
    photoURL,
  };

  const newProfile = new Profile(newProfileData);

  newProfile
    .save()
    .then(() => res.json("New Profile Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Profile.find()
    .then((Profiles) => {
      res.json(Profiles);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
