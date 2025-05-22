import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://narmingkbf206:narmin28311007_@cluster0.etsr5ne.mongodb.net/"
  )
  .then(() => console.log("Connected!"))
  .catch(() => console.log("NOT Connected!"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const chairSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Chair = mongoose.model("Chair", chairSchema);

app.get("/chairs/", async (req, res) => {
  const chairs = await Chair.find();
  res.send(chairs);
});

app.get("/chairs/:id", async (req, res) => {
  const { id } = req.params;
  const chairs = await Chair.findById(id);
  res.send(chairs);
});

app.delete("/chairs/:id", async (req, res) => {
  const { id } = req.params;
  const chairs = await Chair.findByIdAndDelete(id);
  res.send(chairs);
});

app.post("/chairs/", async (req, res) => {
  const { body } = req;
  const chairs = await Chair.create(body);
  res.send(chairs);
});

app.put("/chairs/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const chairs = await Chair.findByIdAndUpdate(id,body)
  res.send(chairs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});