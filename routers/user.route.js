const router = require("express").Router();
const UserController = require('../controller/user.controller');

router.get("/",(req, res)=>{
    res.json({success:'Welcome to My web service'});
});
router.post("/register",UserController.register);

router.post("/login", UserController.login);
router.post("/logout", UserController.logout);


module.exports = router;