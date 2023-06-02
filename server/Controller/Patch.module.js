const express = require("express");
const patchRouter = express.Router();
const Record = require("../Model/Record.model");

patchRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fieldToUpdate, updatedValue } = req.body;

    const record = await Record.findById(id);
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }
    record[fieldToUpdate] = updatedValue;
    const updatedRecord = await record.save();
    res.json(updatedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = patchRouter;
