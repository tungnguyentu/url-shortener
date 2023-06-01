const express = require("express");

const router = express.Router();

const { get, save } = require("../controller");

router.get("/:shortUrl", get);
router.post("/", save);
// Export the router
module.exports = router;