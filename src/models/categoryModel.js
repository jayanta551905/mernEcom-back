const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true,
      },
      slug: {
        type: String,
        unique: true,
        lowercase: true,
      }
},{timestamps:true, versionKey: false});

const categoryModel = mongoose.model("categorys", categorySchema);
module.exports = categoryModel;