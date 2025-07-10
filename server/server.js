
import express from "express"
import riddelRouter from "./routs/riddles.js";

const app = express()
app.use(express.json());
app.use("/",riddelRouter)

const Port = 3003;
app.listen(Port, () => {
    console.log(`the server is run: ${Port}`);
})
