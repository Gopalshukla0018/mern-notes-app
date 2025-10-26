import   express  from "express";
import { createNote, getNotes } from "../controllers/createNotes.controller.js";

const router = express.Router();



//get all notes route


// create notes route
router.route("/").post(createNote)

router.route("/").get(getNotes)


export default router;