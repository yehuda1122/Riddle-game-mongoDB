import express from "express";

import {
    readRiddlesFromFile,
    writeRiddleToFile,
    updateRiddleInFile,
    deleteRiddleFromFile
} from "../services/riddlesService.js";

const path = "./data/allRiddle.txt"
export async function getAllRiddles(req,res) {
    try {
        const respons = await readRiddlesFromFile(path);
        res.status(200).json(respons)
    }
    catch (err) {
        console.error("erorr ", err.message);
        res.status(500).json({ failed: "not read" })
    }

}
export async function createRiddle(req, res) {
    const newRiddle = req.body
    try {
        const update = await writeRiddleToFile(path, newRiddle);
        res.status(201).json(update)
    }
    catch (err) {
        console.error("erorr ", err.message);
        res.status(400).json({ failed: "not updatead" })
    }
}

export async function updateRiddle(req, res) {
    const newData = req.body
    try {
        const fileUpdate = await updateRiddleInFile(path, newData);
        res.status(201).json(newData)

    }
    catch (err) {
        console.error("erorr ", err.message);
        res.status(400).json({ failed: "not updatead" })
    }
}
export async function deleteRiddle(req, res) {
    const id = Number(req.params.id)
    if (!id) {
        return res.status(404).json({ error: "id not find" });
    }
    try {
        const deleted = await deleteRiddleFromFile(path, id);
        if (!deleted) {
            return res.status(404).json({ message: "id not found" });
        }
        res.status(200).json({ message: "Riddle deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}