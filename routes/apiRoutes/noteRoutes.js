const router = require("express").Router();
const { notes } = require("../../data/db");

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// get route for getting notes by an id
router.get("/notes/:id", (req, res) => {
    // use req.params.id
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
      // if there's an error, send 404
      res.send(404);
  }
});

// post route for posting notes to the server
router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400
    // if the note fails validation, send 400 and tell user to properly format note
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
    } else {
        // if not, createNewNote and res.json the note;
        // add note to json file and notes array in the func
        const note = creatNewNote(req.body, notes);
        res.json(note);
    }
})


// create filterByQuery, findById, createNewNote, and validateNote
// functions in lib folder***

module.exports = router;
