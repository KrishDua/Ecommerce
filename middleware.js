const {productschema,frozenschema,poojaschema,pickleschema,breadschema,riceschema,pulsesschema,spicesschema,oilschema,papadschema,biryanischema,snacksschema,rteschema,dairyschema,dryfruitschema,flourschema,beverageschema,reviewschema} = require("./schema")
const validateProduct = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = productschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatefrozen = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = frozenschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatepooja = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = poojaschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatepickle = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = pickleschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatebread = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = breadschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validaterice = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = riceschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatepulses = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = pulsesschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatespices = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = spicesschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validateoils = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = oilschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatepapad = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = papadschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatebiryani = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = biryanischema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatesnacks = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = snacksschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validaterte = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = rteschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatedairy = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = dairyschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatedryfruit = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = dryfruitschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validateflour = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = flourschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validatebeverage = (req,res,next)=>{
    let {name,price,img,desc} = req.body;
    const {error} = beverageschema.validate({name,price,img,desc});
    if(error){
        return res.render('products/error');
    }
    next();
}
const validateReview = (req,res,next)=>{
    const {rating,comment} = req.body;
    const {error} = reviewschema.validate({rating,comment});
    if(error){
        return res.render('products/error');
    }
    next();
}
const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","Welcome To IndianSpiceMart!!,Please Login To View");
        return res.redirect("/login#product");
    }
    next();
}
module.exports = {isLoggedIn,validateProduct,validatefrozen,validatepooja,validatepickle,validatebread,validaterice,validatepulses,validatespices,validateoils,validatepapad,validatebiryani,validatesnacks,validaterte,validatedairy,validatedryfruit,validateflour,validatebeverage,validateReview}