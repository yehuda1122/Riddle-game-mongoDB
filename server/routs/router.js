import express from "express"

import {
  getAllRiddles,
  createRiddle,
  updateRiddle,
  deleteRiddle
} from "../controllers/riddlesController.js";

import{
  addNewplayer
} from "../controllers/playerController.js";

export const riddelRouter = express.Router();
export const plyeerRouter = express.Router()

riddelRouter.get("/", getAllRiddles);
riddelRouter.post("/add", createRiddle);
riddelRouter.put("/update", updateRiddle);
riddelRouter.delete("/:id", deleteRiddle);

plyeerRouter.post("/add",addNewplayer)

