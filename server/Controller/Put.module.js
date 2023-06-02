const express = require("express");
const PutRouter = express.Router();
const Record = require("../Model/Record.model");

PutRouter.put("/:id", async (req, res) => {
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

module.exports = PutRouter;
