const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  title: String,
  shortUrl: String,
  longUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Urls", urlSchema);