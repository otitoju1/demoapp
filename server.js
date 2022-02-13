const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static("./www"));

app.get("/*", (req, res) => {
    res.sendFile('index.html', {root:'www'});
});

app.listen(PORT, () => console.log(`Evaluation app started on ${PORT}`));
// "start": "ng serve",
