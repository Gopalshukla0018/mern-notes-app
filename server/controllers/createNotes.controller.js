import { Note } from "../models/note.model.js";

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

// get course controller

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      notes,
    });
  } catch (error) {
    console.log("error in getNotes controller", error);
  }
};
