const express = require("express");
const router = express.Router();

const getRouter = require("./Get.module");
const postRouter = require("./Post.module");
const putRouter = require("./Put.module");
const deleteRouter = require("./Delete.module");
const patchRouter = require("./Patch.module");

router.use("/", getRouter);
router.use("/", postRouter);
router.use("/", putRouter);
router.use("/", deleteRouter);
router.use("/", patchRouter);

module.exports = router;
