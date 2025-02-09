import * as dotenv from "dotenv";

dotenv.config();

import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`hello on http://localhost:${process.env.PORT}`);
});
