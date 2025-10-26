import { Note } from "../models/note.model.js";
import mongoose from "mongoose";

// create notes controller
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        message: "title and content are required",
      });
    }

    const note = await Note.create({
      title,
      content,
    });
    return res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    console.log("error in createNode controller", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// get notes controller

export const getnotesAll = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      notes,
    });
  } catch (error) {
    console.log("error in getnotesAll controller", error);
  }
};

// get notes by id

export const getNotesById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
      });
    }
    const note = await Note.findById(id)
    if (!note) {
      return res.staus(404).json({
        success: false,
        message: "note not found",
      });
    }
    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    console.log("error in getnotesid controller", error);
  }
};
