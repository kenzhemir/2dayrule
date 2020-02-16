const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Example app listening on port 3000!");
});
