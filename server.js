import express from "express";
import {config} from "dotenv";
import dbConnect from "./config/db.js";

import activityRoutes from "./routes/activity.js";
import purchasedActivityRoutes from "./routes/purchasedActivities.js";
import cors from "cors";



const app = express();


config();

dbConnect();

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

// Siri
app.use("/api/activity", activityRoutes);
app.use("/api/purchased-activities", purchasedActivityRoutes);


const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));

