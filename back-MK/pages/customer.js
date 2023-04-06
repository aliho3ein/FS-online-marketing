const express = require("express");
const router = express.Router();
/** */
const { customer } = require("../module/index.js");

router.get("/", async (req, res) => {
  const list = await customer.find({}).exec();
  res.json(list);
});

/** add new customer */
router.post("/", (req, res) => {
  customer.create({
    name: req.body.title,
    des: req.body.disc,
    img: req.body.image,
  });
  res.status(201).send();
});

/** delete a customer */
router.delete("/:id", async (req, res) => {
  customer
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
