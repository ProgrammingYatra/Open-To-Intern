const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    collegeId: {
      type: objectId,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("intern", internSchema);