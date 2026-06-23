import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
const Port = process.env.PORT;
if (!Port) {
  process.exit(0);
}
const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (_, res) => {
  res.json("server is running");
});

app.listen(Port, () => {
  console.log(`server is listing on port ${Port}`);
});
