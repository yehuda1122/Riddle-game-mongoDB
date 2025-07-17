import express from "express";

import {
    getRiddlesFromMongoDB,
    writeRiddleToMongoDB,
    updateRiddleImongoDB,
    deleteRiddleFromMongoDB
} from "../services/riddlesService.js";



export async function getAllRiddles(req, res) {
    try {
        const respons = await getRiddlesFromMongoDB();
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
        const update = await writeRiddleToMongoDB(newRiddle);
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
        const fileUpdate = await updateRiddleImongoDB(newData);
        res.status(201).json(newData)
    }
    catch (err) {
        console.error("erorr ", err.message);
        res.status(400).json({ failed: "not updatead" })
    }
}

export async function deleteRiddle(req, res) {
    const id = req.params.id;
    if (!id) {
        return res.status(404).json({ error: "id not find" });
    }
    try {
        const deleted = await deleteRiddleFromMongoDB(id);
        console.log(deleted);
        if (!deleted) {
            return res.status(404).json({ message: "id not found" });
        }
        res.status(200).json({ message: "Riddle deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}