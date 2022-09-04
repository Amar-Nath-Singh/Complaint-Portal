const router = require("express").Router();
let dataset = require("../models/user.model");
router.route("/:username/:password").get((req, res) => {
  dataset
    .findOne({ username: req.params.username, password: req.params.password })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
