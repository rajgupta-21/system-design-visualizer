import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import LoginRoute from "./routes/login.route";
import RegisterRoute from "./routes/register.route";
import SessionRouter from "./routes/session.route";
dotenv.config();

const Port = process.env.PORT || 4000;
if (!Port) {
  process.exit(0);
}
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

/*Login route*/
app.use("/auth", LoginRoute);
/*Register route*/
app.use("/auth", RegisterRoute);
/* user session route*/
app.use("/auth", SessionRouter);

app.get("/", (_, res) => {
  res.json("server is running");
});

app.listen(Port, () => {
  console.log(`server is listing on port ${Port}`);
});
