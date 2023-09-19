import mongoose from "mongoose";

const favSchema = mongoose.Schema({
  id: String,
  title: String,
  image: String,
  summary: String,
  userID: String,
  ingredients: Array,
  instructions: Array,
});

const favModel = mongoose.model("fav", favSchema);

export { favModel };
