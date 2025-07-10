import express from "express"

import {
  getAllRiddles,
  createRiddle,
  updateRiddle,
  deleteRiddle
} from "../controllers/riddlesController.js";

const riddelRouter = express.Router();

riddelRouter.get("/riddle", getAllRiddles);
riddelRouter.post("/add", createRiddle);
riddelRouter.put("/update", updateRiddle);
riddelRouter.delete("/:id", deleteRiddle);

export default riddelRouter;