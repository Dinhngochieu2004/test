import dotenv from "dotenv";
dotenv.config();
import appDefault from "./app";
import dbDefault from "./db";
export default{
    app: appDefault,
    db: dbDefault,
}