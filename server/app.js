const express = require ("express")

const app = express();

app.get("/", (req, res) => {
    res.send("Hello LinkedIn!");
});

// Start the server
const port = 5555; // Change it to your desired port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
