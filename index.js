import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import connectDB from "./db/index.js";
import router from "./routes/serviceRoutes.js";

dotenv.config();
const app = express();
connectDB();
app.use(bodyParser.json());

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));