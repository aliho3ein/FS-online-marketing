const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/online-MK");
};
connect();

/** customer collection */
const customerSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    des: { type: String },
    link: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

/** crew collection */
const crewSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    des: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = {
  crew: mongoose.model("crew", crewSchema),
  customer: mongoose.model("customer", customerSchema),
};
