require("dotenv").config();
// console.log(process.env);
// console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
// console.log("Google Client Secret:", process.env.GOOGLE_CLIENT_SECRET);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const reviewRoutes = require("./routes/review");
const productroutes = require("./routes/product");
const authroutes = require("./routes/auth");
const cartroutes = require("./routes/cart");
const paymentroutes = require("./routes/payment");
const ejsmate = require("ejs-mate");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const localstrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("./models/User");
const path = require("path");
mongoose.connect(process.env.mongourl,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(()=>{
    console.log("db connected successfully");
})
.catch((err)=>{
    console.log("db error");
    console.log(err);
})
let configsession = {
    secret : "keyboard cat",
    resave : false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true,
        expires : Date.now() + 5*60*60*1000,//in milliseconds
        maxAge : 5*60*60*1000
    }
};
const port = process.env.port;
// view engine set
app.engine("ejs",ejsmate);
app.set("view engine","ejs");// view engine is recognizing ejs extension files
// views folder
app.set("views",path.join(__dirname,"views"));
// public folder
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'));
app.use(flash());
app.use(session(configsession));
// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>{
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})
passport.use(new localstrategy(User.authenticate()));
passport.use(new GoogleStrategy({
    clientID : '1063503259255-8s5mqill36jjf5rm91e2n1o3i5i3mefb.apps.googleusercontent.com' ,
    clientSecret : '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' ,
    callbackURL : 'https://indianspicemart-cuwn.onrender.com/login/google/callback',
    scope: ['profile', 'email']
},async(token,tokenSecret,profile,done)=>{
    try {
        let newuser = await User.findOne({googleId : profile.id});
        // console.log(newuser);
        if(!newuser){
            console.log("the user does not exist previously");
            newuser = new User({
                googleId : profile.id,
                username : profile.displayName,
                email : profile.emails[0].value,
                profileImage: profile.photos[0].value
            });
            await newuser.save();
            return done(null,newuser);
        }else{
            console.log("the user exists previously");
            return done(null,newuser);
        }
    } catch (err) {
        return done(err);
    }
}));
passport.use(new FacebookStrategy({
    clientID : process.env.FB_CLIENT_ID ,
    clientSecret : process.env.FB_CLIENT_SECRET ,
    callbackURL : "https://indianspicemart-cuwn.onrender.com/login/facebook/callback",
    profileFields: ['id', 'displayName', 'emails', 'photos']
},async(token,tokenSecret,profile,done)=>{
    try {
        let newuser = await User.findOne({facebookId : profile.id});
        // console.log(newuser);
        if(!newuser){
            console.log("the user does not exist previously");
            newuser = new User({
                facebookId : profile.id,
                username : profile.displayName,
                email : profile.emails[0].value,
                profileImage: profile.photos[0].value
            });
            await newuser.save();
            return done(null,newuser);
        }else{
            console.log("the user exists previously");
            return done(null,newuser);
        }
    } catch (err) {
        return done(err);
    }
}));
// seeding database 
// seedDB();
app.use(productroutes);// so that the path can be checked for every incoming request
app.use(reviewRoutes);// so that the path can be checked for every incoming request
app.use(authroutes);//so that the path can be checked for every incoming request
app.use(cartroutes);//so that the path can be checked for every incoming request
app.use(paymentroutes);//so that the path can be checked for every incoming request
app.listen(port,function(){
    console.log(`server connected at port ${port}`);
})
