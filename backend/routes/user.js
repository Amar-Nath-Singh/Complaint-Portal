const router = require("express").Router();
let dataset = require("../models/user.model");
router.route("/").get((req, res) => {
  dataset
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
