const express = require("express");
const router = express.Router()//mini server
const isLoggedIn = require("../middleware");
const User = require("../models/User");
const Frozen = require("../models/Frozen");
const Pooja = require("../models/Pooja");
const Pickle = require("../models/Pickle");
const Bread = require("../models/Bread");
const Rice = require("../models/Rice");
const Pulse = require("../models/Pulse");
const Spice = require("../models/Spice");
const Oil = require("../models/Oil");
const Papad = require("../models/Papad");
const Biryani = require("../models/Biryani");
const Snack = require("../models/Snack");
const Rte = require("../models/Rte");
const Dairy = require("../models/Dairy");
const Dryfruit = require("../models/Dryfruit");
const Flour = require("../models/Flour");
const Beverage = require("../models/Beverage");
// router.get("/cart",isLoggedIn,async (req,res)=>{
//     let user = await User.findById(req.user._id);
//     res.render("cart/cart",{user});
//     res.send("welcome to cart");
// })
// router.post("/user/:id/add",isLoggedIn,async(req,res)=>{
//     // try{
//         let productid = req.params;
//         let userid = req.user._id;
//         console.log(productid,userid);
//         let product = await Frozen.findById(productid);
//         console.log(product);
//         let user = await User.findById(userid);
//         console.log(user);
//         user.cart.push(product);
//         res.redirect("/cart");
//     // }
//     // catch(e){
//     //     res.status(500).render("products/error");
//     // }
// })
let myuser;
router.post('/Frozen%20Food/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id ; 
    myuser = req.user;
    let product = await Frozen.findById(productId);
    // console.log(product);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Frozen",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Frozen%20Food/");
})
router.post('/Pooja%20samagri/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id ; 
    myuser = req.user;
    let product = await Pooja.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Pooja",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Pooja%20samagri/");
})
// /Pickles/
router.post('/Pickles/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id ; 
    myuser = req.user;
    let product = await Pickle.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Pickle",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Pickles/");
})
router.post('/Breads%20and%20eggs/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id ; 
    myuser = req.user;
    let product = await Bread.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Bread",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Breads%20and%20eggs/");
})
router.post('/Rice/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id ; 
    myuser = req.user;
    let product = await Rice.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Rice",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Rice/");
})
router.post('/Pulses/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id ; 
    myuser = req.user;
    let product = await Pulse.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Pulse",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Pulses/");
})
router.post('/Spices/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id ; 
    myuser = req.user;
    let product = await Spice.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Spice",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Spices/");
})
router.post('/Oils%20and%20Ghee/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Oil.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Oil",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Oils%20and%20Ghee/");
})
router.post('/Papad/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Papad.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Papad",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Papad/");
})
router.post('/Biryani/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Biryani.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Biryani",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Biryani/");
})
router.post('/Snacks/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Snack.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Snack",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Snacks/");
})
router.post('/Ready%20to%20eat/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Rte.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Rte",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Ready%20to%20eat/");
})
router.post('/Dairy%20Products/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Dairy.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Dairy",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Dairy%20Products/");
})
router.post('/Dry%20Fruits/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Dryfruit.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Dryfruit",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Dry%20Fruits/");
})
router.post('/Flour/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Flour.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Flour",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Flour/");
})
router.post('/Beverages/user/:productId/add' ,async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id; 
    myuser = req.user;
    let product = await Beverage.findById(productId);
    let user = await User.findById(userId);
    user.cart.push({itemid : product,itemmodel : "Beverage",quantity : 1});
    await user.save();
    req.flash("success","Product added Successfully");
    res.redirect("/Beverages/");
})
router.get('/cart' , async(req,res)=>{
        if(req.isAuthenticated()){
            let user = await User.findById(req.user._id).populate("cart.itemid");
            const totalamount = user.cart.reduce((sum, curr) => {
                const price = curr.itemid.price ? parseFloat(curr.itemid.price.toString()) : 0;
                return sum + price;
            }, 0);            
            res.render('cart/cart' ,{user,totalamount});
        }else{
            req.flash("error","Welcome To IndianSpiceMart!!,Please Login To View");
            return res.redirect("/login#product");
        }
})
router.post("/cart/:itemid/delete",async(req,res)=>{
    const {itemid} = req.params;
    const userid = req.user._id;
    try{
        const user = await User.findById(userid);
        if(!user){
            req.flash("error","User Not Found");
            return res.redirect("/cart");
        }
        user.cart.pull(itemid);
        await user.save();
        req.flash("success","item removed from cart successfully");
        res.redirect("/cart#product");
    }
    catch(e){
        console.log(e);
        req.flash("error","Failed to remove item from cart");
        res.redirect("/cart");
    }
});
// // actually dding the product to the cart
module.exports = router;