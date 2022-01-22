const router = require('express').Router();
const {Exercise} = require('../models')
const withAuth = require("../utils/auth")
router.get("/", function (req, res) {
    res.render("main")
});

router.get("/dashboard", withAuth, async function (req, res) {
    try {
        const exerciseData = await Exercise.findAll({ 
            where: {
                userId: req.session.userId
            }
        });
        const exercises = exerciseData.map((exercise) => exercise.get({ plain: true}));
        res.render("dashboard", exercises);
    } catch (error) {
        
    }
})

router.get("/login", function (req, res) {
    if (req.session.loggedIn){
        res.redirect("/")
        return 
    };
res.render("login")
})

router.get("/signup", function (req, res) {
    if (req.session.loggedIn){
        res.redirect("/")
        return 
    };
res.render("signup")
})

module.exports = router