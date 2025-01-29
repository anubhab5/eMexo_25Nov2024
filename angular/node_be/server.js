require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// TO START THE SERVER:
// NAVIGATE TO THE FOLDER node_be
// run ::: npm install
// run ::: node server

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());

let items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
];

// ✅ **1. GET All Items**
app.get("/items", (req, res) => {
  res.json(items);
});

// ✅ **2. GET Single Item by ID**
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// ✅ **3. POST - Create New Item**
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.status(211).json(newItem);
});

// ✅ **4. PUT - Update an Item**
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// ✅ **5. DELETE - Remove an Item**
app.delete("/items/:id", (req, res) => {
  items = items.filter((i) => i.id !== parseInt(req.params.id));
  res.json({ message: "Item deleted successfully" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
