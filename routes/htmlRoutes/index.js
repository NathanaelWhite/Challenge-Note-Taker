// require path
const path = require('path');
// require router
const router = require('express').Router();


// create get route to sendFile(path.join(__dirname, ... index.html))
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// create get route to sendFile(path.join(__dirname, ... note.html))
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// create get route for wild cards "*"
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// module exports
module.exports = router;