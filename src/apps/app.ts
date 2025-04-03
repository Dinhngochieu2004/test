import express from "express";
import router from "../routers/web";
import config  from "../../config/app";
//connect db
import connectDB from "../common/database";
connectDB();
const app = express();
//use router
const api = config.app.prefixApiVersion;
app.use(router);
app.use(api,router);
export default app;