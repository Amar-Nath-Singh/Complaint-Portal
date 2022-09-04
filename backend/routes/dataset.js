const router = require("express").Router();
let dataset = require("../models/dataset.model");
router.route("/").get((req, res) => {
  dataset
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/addcomplaint").post((req, res) => {
  const name = req.body.name;
  const rollno = req.body.rollno;
  const desp = req.body.desp;
  const status = req.body.status;
  const newData = new dataset({
    name,
    rollno,
    desp,
    status

  });

  newData
    .save()
    .then(() => res.json("Data added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/delete/:id").delete((req, res) => {
  console.log(String(req.params.id))
  dataset
    .findByIdAndDelete(String(req.params.id))
    .then(() => res.json("Data deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
