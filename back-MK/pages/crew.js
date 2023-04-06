const express = require("express");
const router = express.Router();
/** */
const { crew, customer } = require("../module/index.js");

router.get("/all", async (req, res) => {
  const crewList = await crew.find({}).exec();
  const customerList = await customer.find({}).exec();
  res.send({ customer: customerList, crew: crewList });
});

router.get("/", async (req, res) => {
  await crew.find({}).exec(function (err, res) {
    if (err) {
      console.log(err);
    } else {
      res.send(res);
    }
  });
});

router.get("/:id", async (req, res) => {
  const item = await crew.findById(req.params.id);
  res.status(201).send(item);
});

/** add new crew */
router.post("/", (req, res) => {
  crew.create({
    name: req.body.title,
    des: req.body.disc,
    img: req.body.image,
    user: req.body.user,
  });
  res.send("ok");
});

/** delete crew */
router.delete("/:id", (req, res) => {
  crew
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => res.status(400).send(err));
});

router.put("/:id", (req, res) => {
  crew
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
