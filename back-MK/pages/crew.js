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
  const list = await crew.find({}).exec(function (err, res) {
    if (err) {
      console.log(err);
    } else {
      res.send(res);
    }
  });
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

module.exports = router;
