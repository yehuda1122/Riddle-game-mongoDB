import express from "express";

import {
    getRiddlesFromMongoDB,
    writeRiddleToMongoDB,
    updateRiddleImongoDB,
    deleteRiddleFromMongoDB
} from "../services/serverDAL.js";



export async function getAllRiddles(req, res) {
    try {
        const respons = await getRiddlesFromMongoDB();
        res.status(200).json(respons)
    }
    catch (error) {
        res.status(500).json({ error: "not read" })
    }
}

export async function createRiddle(req, res) {
    const newRiddle = req.body    
    try {
        await writeRiddleToMongoDB(newRiddle);
        res.status(201).json({msg:"The riddle created"})
    }
    catch (error) {
        res.status(400).json({ error: "not created" })
    }
}

export async function updateRiddle(req, res) {
    const newData = req.body    
    try {
        await updateRiddleImongoDB(newData);
        res.status(200).json({msg: "the riddel updatead" })
    }
    catch (error) {
        res.status(400).json({ error: "not updatead" })
    }
}

export async function deleteRiddle(req, res) {
    const id = req.params.id;
    try {
        const deleted = await deleteRiddleFromMongoDB(id);
        if (deleted.deletedCount == 0) {
            return res.status(404).json({ msg:"id not found" });
        }
        res.status(200).json({ msg: "The riddle deleted successfully" });
    } catch(error) {
        res.status(500).json({error: "The riddle not deleted",});
    }
}