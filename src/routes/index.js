var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const userInfo = {
    name: "Nayeon Shim",
    image: "me.png",
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
    email: "nayeon.shim@gmail.com",
    phone: "1234567890",
    title: "Web Designer & Developer",
    address: "777 Bay St, Toronto, ON, Candada",
  };
  res.render("contact", { userInfo });
});

router.post("/messages", function (req, res, next) {
  res.redirect("/");
});

module.exports = router;
