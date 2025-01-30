import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("hello from my server");
});

export default app;
