
import express from "express"
import {riddelRouter,plyeerRouter} from "./routs/router.js";
import cookieParser from "cookie-parser";

const app = express()
app.use(cookieParser());
app.use(express.json());
app.use("/riddle",riddelRouter)
app.use("/player",plyeerRouter)

const Port = process.env.PORT || 3003
app.listen(Port, () => {
    console.log(`the server is run: ${Port}`);
})
