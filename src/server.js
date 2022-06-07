import express from "express";

export const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "test" });
});

app.get("/api", (req, res) => {
  const { name, age } = req.query;
  console.log(name, age);
  res.json({ message: "hello " + name });
});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});
