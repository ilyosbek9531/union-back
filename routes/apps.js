const express = require("express");
const router = express.Router();
const appsController = require("../controllers/apps");

router.get("/", appsController.getApps);
router.post("/", appsController.postApp);
router.get("/:id", appsController.getSingleApp);
router.put("/:id", appsController.putApp);
router.patch("/:id", appsController.patchApp);
router.delete("/:id", appsController.deleteApp);

module.exports = router;
