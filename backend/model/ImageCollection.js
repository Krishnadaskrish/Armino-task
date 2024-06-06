const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    weatherType: { type: String },
    imageUrl: { type: String },
}, {
    timestamps: true,
});

const imageCollection = mongoose.model("weatherIcon", imageSchema);

module.exports = imageCollection;