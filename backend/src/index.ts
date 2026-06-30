import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import GenerateRoute from "./routes/ai-generate.route";
import DesignRoute from "./routes/get-design.route";
import LoginRoute from "./routes/login.route";
import RegisterRoute from "./routes/register.route";
import saveSnapshotRoute from "./routes/savesnapshot.route";
import SessionRouter from "./routes/session.route";
dotenv.config();

const Port = process.env.PORT || 4000;
if (!Port) {
  process.exit(0);
}
const app = express();
app.use(
  express.json({
    limit: "10mb",
  }),
);
app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
  }),
);
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
/* Design generate route*/
app.use("/ai", GenerateRoute);
/*Get Design Route*/
app.use("/user", DesignRoute);
/*Save snapshot for design*/
app.use("/user", saveSnapshotRoute);

app.get("/", (_, res) => {
  res.json("server is running");
});

app.listen(Port, () => {
  console.log(`server is listing on port ${Port}`);
});
