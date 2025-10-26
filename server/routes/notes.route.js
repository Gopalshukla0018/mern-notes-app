import express from "express";
import {
  createNote,
  deleteNote,
  getnotesAll,
  getNotesById,
  updateNote,
} from "../controllers/createNotes.controller.js";

const router = express.Router();

//get all notes route

// create notes route
router.route("/").post(createNote);

router.route("/").get(getnotesAll);

router.route("/:id").get(getNotesById);


router.put('/:id', updateNote); 
router.delete('/:id', deleteNote); 

export default router;
