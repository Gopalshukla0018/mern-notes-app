import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Note = mongoose.model("Note", notesSchema);
