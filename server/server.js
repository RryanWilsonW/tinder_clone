import express, { urlencoded } from "express";
import mongoose from "mongoose";
import Cards from "./models/dbCards.js";
import Cors from "cors";
import dotenv from "dotenv";

//App config
const app = express();
const port = process.env.PORT || 8001;
dotenv.config({ path: ".env" });

//Middlewares
app.use(express.json());
app.use(Cors());
//Db config
mongoose.connect(process.env.CONNECTION_URL).then(() => {
  console.log("database connected");
});
//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!!"));

//This will send information to our database
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
console.log(process.env.CONNECTION_URL);
//This will retrieve information from out database
app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listeners
app.listen(port, () => console.log(`listening on loacalhost: ${port}`));
