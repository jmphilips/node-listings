import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
console.log("hhahahha");
const app = express();
app.use(bodyParser());
app.use(cors());
app.use("/agents", routes.agents);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on port ${process.env.PORT}`);
});
