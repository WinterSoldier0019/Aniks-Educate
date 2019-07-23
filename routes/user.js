const express       = require("express");
var passport        = require("passport")
var router = express.Router();
var connection = require("../dbconn");
var middleware = require("../middleware/index");

router.get("/signup", (req, res) => {
    // if (req.user) res.send("User : " + req.user.username + " already logged in");
    if (req.user) res.redirect("/");
    else res.render("signup");
});

router.post("/signup", passport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/signup'
}));

router.get("/login", (req, res) => {
    // if (req.user) res.send("User : " + req.user.username + " already logged in");
    if (req.user) res.redirect("/");
    else res.render("login");
});

router.get("/logout", middleware.isLogged, (req, res) => {
    req.logout();
    res.redirect("/");
})

router.post("/login", passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login'
}));

router.get("/profile", middleware.isLogged, (req, res) => {
        res.render("profile", {
            currentUser : req.user
        });  
})
module.exports = router;