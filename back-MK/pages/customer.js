const express = require("express");
const router = express.Router();
/** */
const { customer } = require("../module/index.js");

router.get("/", async (req, res) => {
  const list = await customer.find({}).exec();
  res.json(list);
});

router.get("/:id", async (req, res) => {
  const item = await customer.findById(req.params.id);
  res.status(201).send(item);
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

router.put("/:id", (req, res) => {
  customer
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
