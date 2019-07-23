var middleware={};

middleware.isLogged = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = middleware;
