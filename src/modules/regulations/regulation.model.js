const mongoose = require("mongoose");

const regulationSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    description: String,
    startYear: Number,
    endYear: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Regulation", regulationSchema);
