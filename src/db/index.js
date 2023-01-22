const mongoose = require("mongoose");
const { MONGO_URL } = require("../configs");


function mongooseConnectDB(uri) {
  mongoose
  .set('strictQuery', true)
    .connect(uri)
    .then((result) =>
      console.log("Mongoose connected to ", result.connections[0].host)
    )
    .catch((err) => console.log("error connecting to the database", err));
}

mongooseConnectDB(MONGO_URL);


module.exports = mongoose.connection;