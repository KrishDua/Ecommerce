const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router()//mini server
// to show the form of signup
router.get("/register",(req,res)=>{
    res.render("auth/signup");
})
// actually want to register a user in my db
let myuser;
router.post("/register",async (req,res)=>{
    try{
        let {username,email,password} = req.body;
        const user = new User({email,username});
        const newuser = await User.register(user,password);
        // console.log(newuser);
        // req.flash("success",`Welcome ${newuser.username}`);
        // res.redirect("/login#product");
        req.login(newuser,function(err){
            if(err){
                return next(err);
            }
            req.session.isAuthenticated = true;
            myuser = req.user;
            req.flash("success",`Welcome ${newuser.username}`);
            res.redirect("/#product");
        })
    }
    catch(e){
        res.status(500).render("products/error");
    }
})
// to get login form 
router.get("/login",(req,res)=>{
    res.render("auth/login");
})
// to actually login via the db
router.post("/login",passport.authenticate('local', { 
                            failureRedirect: '/login#product', 
                            failureMessage: true ,
                            failureFlash: 'Invalid username or password.'
                        }),(req,res)=>{
                            req.flash('success',`Welcome back ${req.user.username} !!`);
                            req.session.isAuthenticated = true;
                            myuser = req.user;
                            res.redirect('/');
})
router.get("/logout",(req,res)=>{
    // let usernaam = myuser.username;
    // req.flash("success",`Good bye ${usernaam},come back later!!`);
    req.session.destroy(err=>{
        if(err){
            return res.redirect("/");
        }
        res.redirect("/");
    })
    // ()=>{
    //     req.logout();
    // }
    // req.session.isAuthenticated = false;
    // req.flash("success",`Good bye ${usernaam},come back later!!`);
    // res.redirect("/");
})
router.get("/login/google",passport.authenticate("google",{
    scope : ["profile","email"]
}))
router.get("/login/google/callback",passport.authenticate("google",{
    failureRedirect : "/login#product",
    failureMessage: true ,
    failureFlash: 'Invalid username or password.'
}),(req,res)=>{
    req.session.isAuthenticated = true;
    myuser = req.user;
    req.flash('success',`Welcome ${req.user.username} !!`);
    res.redirect('/');
});
router.get("/login/facebook",passport.authenticate("facebook",{
    scope : ["profile","email"]
}));
router.get("/login/facebook/callback",passport.authenticate("facebook",{
    failureRedirect : "/login#product",
    failureMessage: true ,
    failureFlash: 'Invalid username or password.'
}),(req,res)=>{
    req.session.isAuthenticated = true;
    myuser = req.user;
    req.flash('success',`Welcome ${req.user.username} !!`);
    res.redirect('/');
});
router.get("/profile",(req,res)=>{
    // console.log(myuser);
    res.render("auth/profile",{myuser});
})
module.exports = router;