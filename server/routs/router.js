import express from "express"

import {
  getAllRiddles,
  createRiddle,
  updateRiddle,
  deleteRiddle
} from "../controllers/riddlesController.js";

import{
  addNewplayer,
  login
} from "../controllers/playerController.js";
import { verifyToken } from "../function/verify.js";

import{timeFromDB} from "../controllers/playerController.js"

export const riddelRouter = express.Router();
export const plyeerRouter = express.Router()

riddelRouter.get("/", getAllRiddles);
riddelRouter.post("/add", verifyToken,createRiddle);
riddelRouter.put("/update",verifyToken,updateRiddle);
riddelRouter.delete("/:id",verifyToken,deleteRiddle);

plyeerRouter.post("/add",addNewplayer);
plyeerRouter.post("/login",login);
plyeerRouter.put("/updateTime",timeFromDB)

