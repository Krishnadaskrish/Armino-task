const express = require("express");
const tryCatch = require("../MiddileWare/trycatch")
const router = express.Router();
const {fetchApi,addImage} = require("../Controller/Weather")


router.route("/details").post(tryCatch(fetchApi))
router.route("/uplode").post(tryCatch(addImage))


module.exports = router