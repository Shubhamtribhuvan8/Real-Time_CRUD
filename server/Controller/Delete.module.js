const express = require("express");
const DelteRouter = express.Router();
const Record = require("../Model/Record.model");

// Delete a record
DelteRouter.delete("/:id", async (req, res) => {
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

module.exports = DelteRouter;
