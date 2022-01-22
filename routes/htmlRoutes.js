const router = require('express').Router();
router.get("/", function (req, res) {
    res.render("main")
});

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