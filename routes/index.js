const router = require("express").Router();
const userRoutes = require("./api");

// Book routes
router.use("/api", userRoutes);

module.exports = router;

