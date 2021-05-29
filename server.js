const express = require('express');
// const { notes } = require('./data/db');
const apiRoutes = require('./routes/apiRoutes/noteRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(express.static('public'));
    // parse incoming string or array
app.use(express.urlencoded({ extend: true }));
    // parse incoming JSON data
app.use(express.json());


app.use('/api', apiRoutes);
// app.use for htmlRoutes
app.use('/', htmlRoutes)
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});