const express = require("express");
const router = express.Router();
const Record = require("../Model/Record.model");

// Get all records
router.get("/", async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new record
router.post("/", async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Update a record
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a record
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findByIdAndRemove(id);
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
