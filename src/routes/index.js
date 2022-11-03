var express = require("express");
var router = express.Router();

function requireAuth(req, res, next) {
  // check if the user is logged in

  // ADD YOUR CODE HERE
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
    res.redirect("/views/signin");
  }
}

/* GET home page. */
router.get("/", function (req, res, next) {
  const userInfo = {
    name: "Nayeon Shim",
    image: "meTop.jpg",
  };
  //render function ->  views to create the webpage
  res.render("index", { userInfo, isAuth: req.isAuthenticated() });
});
/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("about", { isAuth: req.isAuthenticated() });
});
/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { isAuth: req.isAuthenticated() });
});
/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { isAuth: req.isAuthenticated() });
});
/* GET contact page. */
router.get("/contact", function (req, res, next) {
  const userInfo = {
    name: "Nayeon Shim",
    email: "nshim1@my.centennialcollege.ca",
    phone: "14167778439",
    title: "Web Designer & Developer",
    address: "777 Bay St, Toronto, ON, Candada",
  };
  res.render("contact", { userInfo, isAuth: req.isAuthenticated() });
});

router.post("/messages", function (req, res, next) {
  res.redirect("/");
});

router.get("/signin", function (req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  }
  res.render("signin", {
    title: "Login",
    isAuth: req.isAuthenticated(),
  });
});
router.get("/signup", function (req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  }
  res.render("signup", {
    title: "Sign up",
    isAuth: req.isAuthenticated(),
    user: {},
  });
});

module.exports = router;
