var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const userInfo = {
    name: "Nayeon Shim",
    image: "meTop.jpg",
  };
  res.render("index", { userInfo });
});
/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("about");
});
/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects");
});
/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services");
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
  res.render("contact", { userInfo });
});

router.post("/messages", function (req, res, next) {
  res.redirect("/");
});

module.exports = router;
