const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const categories = require("./Data/categories.json");
const product = require("./Data/product.json");

app.get("/", (req, res) => {
	res.send("Now server is running");
});

app.get("/course", (req, res) => {
	res.send(categories);
});

app.get("/catcourse/:id", (req, res) => {
	const id = req.params.id;
	if (id === "7") {
		res.send(product);
	} else {
		const category = product?.filter((n) => n.category_id === id);
		res.send(category);
	}
});

app.get("/courseDetails/:id", (req, res) => {
	const id = req.params.id;
	const singleProduct = product?.find((p) => p._id === id);
	res.send(singleProduct);
});

app.listen(Port, () => {
	console.log("Server is running", Port);
});
