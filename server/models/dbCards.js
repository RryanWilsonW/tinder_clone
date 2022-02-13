//A shema is uded to define an outline for our database.
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", cardSchema);
