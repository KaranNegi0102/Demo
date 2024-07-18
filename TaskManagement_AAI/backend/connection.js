const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://karannegi10:Gautamn49@projects.67269bl.mongodb.net/TaskManagement"
);

mongoose.connection.on("connected", () => {
  console.log("DB COnnected");
});

mongoose.connection.on("error", (err) => {
  console.log("Error in connecting DB", err);
});

module.exports = mongoose;
