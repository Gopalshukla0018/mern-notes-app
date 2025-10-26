import   express  from "express";

const router = express.Router();

console.log(router)

router.route("/notes").get((req, res) => {
  res.send("Get all notes");
});

export default router;