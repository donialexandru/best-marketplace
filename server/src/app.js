import express from "express";
import router from "./router.js";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hello from my server");
  res.status(200);
  res.json({ message: "Hello" });
});

app.use("/api", router);

export default app;
