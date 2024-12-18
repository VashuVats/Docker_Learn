const express = require('express');

const app = express();
const PORT = 2024;

app.get('/',(req,res) => {
    res.status(200);
    res.send("Learning Docker and Github Actions");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT} `));