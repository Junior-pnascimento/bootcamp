import express from "express";
import { helloRayza } from "./routes";

const app = express();

app.get("/", helloRayza);

app.listen(3333);
