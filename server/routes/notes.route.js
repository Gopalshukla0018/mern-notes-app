import express from "express";
import {
  createNote,
  getnotesAll,
  getNotesById,
} from "../controllers/createNotes.controller.js";

const router = express.Router();

//get all notes route

// create notes route
router.route("/").post(createNote);

router.route("/").get(getnotesAll);

router.route("/:id").get(getNotesById);

export default router;
