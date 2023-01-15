import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import { config } from "dotenv";
// env
config();
// port number
const PORT = 5000;
// app
const app = express();
// middleware
app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);

  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("hhhh");
});

const db = mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Connected to ${PORT}`);
  app.listen(PORT);
});