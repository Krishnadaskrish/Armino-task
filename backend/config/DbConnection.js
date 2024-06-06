const mongoose = require("mongoose");

mongoose
  .connect(
    // "mongodb+srv://krishnadas10official:NvprAx7dpfw8i88i@cluster0.m3kbm5k.mongodb.net/weather task"
    "mongodb+srv://mblogx4u:OwDBbAe3V0myjzWT@weatherhub.i0nz3hz.mongodb.net/?retryWrites=true&w=majority&appName=WeatherHub"
  )
  .then(() => console.log("DB connected "))
  .catch(() => console.log("error"));

module.exports = mongoose;
