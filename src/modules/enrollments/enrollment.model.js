const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    semester: Number,

    status: {
      type: String,
      enum: ["REGULAR", "BACKLOG", "REPEAT"],
      default: "REGULAR",
    },
  },
  { timestamps: true },
);

enrollmentSchema.index({ studentId: 1, subjectId: 1 }, { unique: true });

module.exports = mongoose.model("Enrollment", enrollmentSchema);
