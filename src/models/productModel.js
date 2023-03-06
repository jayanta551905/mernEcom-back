const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
      },
      slug: {
        type: String,
        lowercase: true,
      },
      description: {
        type: {},
        required: true,
      },
      price: {
        type: Number,
        trim: true,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number
      },
      sold: {
        type: Number
      },
      photo: {
        data: Buffer,
        contentType: String
      },
      shipping: {
        required: false,
        type: Boolean
      }


},{timestamps:true, versionKey: false});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;