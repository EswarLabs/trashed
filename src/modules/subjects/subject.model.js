const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    subjectCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    credits: Number,
    semester: {
      type: Number,
      required: true,
    },
    curriculumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Curriculum",
      required: true,
    },
    isElective: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

subjectSchema.index({ subjectCode: 1, curriculumId: 1 }, { unique: true });

module.exports = mongoose.model("Subject", subjectSchema);
