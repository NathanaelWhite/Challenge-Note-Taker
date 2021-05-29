const fs = require("fs");
const router = require("express").Router();
const db = require("../../data/db.json");
const { v4: uuidv4 } = require("uuid");

const notes = [];

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  fs.writeFileSync(
    path.join(__dirname, "../../data/db.json"),
    JSON.stringify({ db: notes }, null, 2)
  );

  notes.push(newNote);
  res.json(notes);
});

// // post route for posting notes to the server
// router.post("/notes", (req, res) => {

//   res.json(note);
// });

module.exports = router;
