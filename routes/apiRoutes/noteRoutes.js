const fs = require("fs");
const router = require("express").Router();
const db = require("../../data/db.json");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

let notesArray = [];

function createNewNote(db) {
  
  let newNote = {
    "title": db.title,
    "text": "ex",
    "id": uuidv4(),
  };
  notesArray.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, '../../data/db.json'),
    JSON.stringify({ db: notesArray }, null, 2)
  );
  console.log(newNote);
  return notesArray;
}

router.get("/notes", (req, res) => {
  let results = db;
  res.json(results);
});

// post route for posting notes to the server
router.post("/notes", (req, res) => {

  fs.writeFileSync(
    path.join(__dirname, "../../data/db.json"),
    JSON.stringify({ db }, null, 2)
  );

  // if any data in req.body is incorrect, send 400
  // if the note fails validation, send 400 and tell user to properly format note

  // if not, createNewNote and res.json the note;
  // add note to json file and notes array in the func
  const note = createNewNote(req.body, db);
  res.json(note);
});

// create filterByQuery, findById, createNewNote, and validateNote
// functions in lib folder***

module.exports = router;
