import 'reflect-metadata';

import express, { request } from "express";
import routes from "./routes";

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3030, () => {
  console.log("🏮 Server starded on port 3030");
});
