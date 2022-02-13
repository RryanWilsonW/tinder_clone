import express from "express";
import mongoose from "mongoose";

//App config
const app = express();
const port = process.env.PORT || 8001;
const connectionURL =
  "mongodb+srv://RryanWilsonW:C@rb0n2020@cluster0.puzyn.mongodb.net/tinderdb?retryWrites=true&w=majority";
//Middlewares

//Db config
mongoose.connect(connectionURL, {
  useNewURLParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!!"));

//Listeners
app.listen(port, () => console.log(`listening on loacalhost: ${port}`));
