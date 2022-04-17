const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://ash_nagargoje:Ash123@cluster0.ds9zb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  );
};