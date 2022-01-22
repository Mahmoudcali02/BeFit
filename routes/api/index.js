const router = require('express').Router();
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use("/user", userRoutes);
router.use("/workouts", exerciseRoutes);

module.exports = router;