import app from "../apps/app";
import config from "../../config/app"
const port = config.app.port
const server = app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});