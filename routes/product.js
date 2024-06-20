const express = require("express");
const Product = require("../models/Product");
const Frozen = require("../models/Frozen");
const Pooja = require("../models/Pooja");
const Review = require("../models/Review");
const seedf = require("../seedfrozen");
const seedpj = require("../seedpj");
const seedp = require("../seedp");
const seedbread = require("../seedbread");
const seedrice = require("../seedrice");
const seedpulse = require("../seedpulse");
const seedspice = require("../seedspice");
const seedoils = require("../seedoils");
const seedpapad = require("../seedpapad");
const seedbir = require("../seedbir");
const seedsnack = require("../seedsnack");
const seedrte = require("../seedrte");
const seeddairy = require("../seeddairy");
const seeddry = require("../seeddry");
const seedflour = require("../seedflour");
const seedbev = require("../seedbev");
const Pickle = require("../models/Pickle");
const Breads = require("../models/Bread");
const Rice = require("../models/Rice");
const Pulses = require("../models/Pulse");
const Spice = require("../models/Spice");
const Papad = require("../models/Papad");
const Oils = require("../models/Oil");
const Biryani = require("../models/Biryani");
const Snacks = require("../models/Snack");
const Rte = require("../models/Rte");
const Dairy = require("../models/Dairy");
const Dryfruit = require("../models/Dryfruit");
const Flour = require("../models/Flour");
const Beverage = require("../models/Beverage");
const {validateProduct,isLoggedIn,validatefrozen,validatepooja,validatepickle,validatebread,validaterice,validatepulses,validatespices,validateoils,validatepapad,validatebiryani,validatesnacks,validaterte,validatedairy,validatedryfruit,validateflour,validatebeverage,validateReview} = require("../middleware");
const router = express.Router()//mini instance of app.js(main js file)
// to show all the products 
router.get("/",async(req,res)=>{
    try {
        let products = await Product.find({});
        res.render("products/index",{products});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
// to show the form for new products
router.get("/new",isLoggedIn,(req,res)=>{
     try {
        res.render("products/new");
     } catch (e) {
         res.status(500).render('products/error',{err : e.message});
     }
})
router.get("/about",isLoggedIn,(req,res)=>{
    try {
       res.render("products/about");
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
})
// to actually add the product 
router.post("/",isLoggedIn,validateProduct,async (req,res)=>{
    try {
        let {name,img,price,desc} = req.body;
        await Product.create({name,img,price,desc});
        req.flash('success',"Product added succesfully!!");
        res.redirect("/#product");   
    } catch (e) {
        console.log(e);
        console.log(e.message);
        res.status(500).render('products/error');
    }
    // console.log(req);
})
// to show a list of products
// to show a particular product
router.get(`/Frozen%20Food/:id`, isLoggedIn,async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Frozen.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Frozen Food",msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Frozen%20Food",isLoggedIn, async (req, res) => {
    try {
        let frozens = await Frozen.find({});
        // seedf()
        res.render("products/show", { collection: frozens, Productname : "Frozen Food"});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Pooja%20samagri/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Pooja.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Pooja samagri",msg : req.flash('success') });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Pooja%20samagri",isLoggedIn, async (req, res) => {
    try {
        let pooja = await Pooja.find({});
        // seedpj()
        res.render("products/show", { collection: pooja, Productname : "Pooja samagri" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Pickles/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Pickle.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Pickles" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Pickles",isLoggedIn, async (req, res) => {
    try {
        let pickles = await Pickle.find({});
        // seedp();
        res.render("products/show", { collection: pickles, Productname : "Pickles" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Breads%20and%20eggs/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Breads.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Breads and eggs" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Breads%20and%20eggs",isLoggedIn, async (req, res) => {
    try {
        let breads = await Breads.find({});
        // seedbread();
        res.render("products/show", { collection: breads, Productname : "Breads and eggs" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Rice/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Rice.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Rice",msg : req.flash('success') });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Rice",isLoggedIn, async (req, res) => {
    try {
        let rice = await Rice.find({});
        // seedrice();
        res.render("products/show", { collection: rice, Productname : "Rice" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Pulses/:id", isLoggedIn,async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Pulses.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Pulses" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Pulses",isLoggedIn, async (req, res) => {
    try {
        let pulses = await Pulses.find({});
        // seedpulse();
        res.render("products/show", { collection: pulses, Productname : "Pulses" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Spices/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Spice.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Spices" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Spices", isLoggedIn,async (req, res) => {
    try {
        let spices = await Spice.find({});
        // seedspice();
        res.render("products/show", { collection: spices, Productname : "Spices" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Oils%20and%20Ghee/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Oils.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Oils and Ghee" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Oils%20and%20Ghee",isLoggedIn, async (req, res) => {
    try {
        let Oil = await Oils.find({});
        // seedoils();
        res.render("products/show", { collection: Oil, Productname : "Oils and Ghee" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Papad/:id", isLoggedIn,async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Papad.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Papad" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Papad",isLoggedIn, async (req, res) => {
    try {
        let papad = await Papad.find({});
        // seedpapad();
        res.render("products/show", { collection: papad, Productname : "Papad" });       
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Biryani/:id", isLoggedIn,async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Biryani.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Biryani" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Biryani",isLoggedIn, async (req, res) => {
    try {
        let biryani = await Biryani.find({});
        // seedbir();
        res.render("products/show", { collection: biryani, Productname : "Biryani" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Snacks/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Snacks.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Snacks" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Snacks", isLoggedIn,async (req, res) => {
    try {
        let Snack = await Snacks.find({});
        // seedsnack();
        res.render("products/show", { collection: Snack, Productname : "Snacks" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Ready%20to%20eat/:id", isLoggedIn,async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Rte.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Ready to Eat" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Ready%20to%20eat",isLoggedIn, async (req, res) => {
    try {
        let rte = await Rte.find({});
        // seedrte()
        res.render("products/show", { collection: rte, Productname : "Ready to Eat" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Dairy%20Products/:id", isLoggedIn,async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Dairy.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Dairy Products" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Dairy%20Products", isLoggedIn,async (req, res) => {
    try {
        let dairy = await Dairy.find({});
        // seeddairy();
        res.render("products/show", { collection: dairy, Productname : "Dairy Products" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Dry%20Fruits/:id",isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Dryfruit.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Dry Fruits" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Dry%20Fruits",isLoggedIn, async (req, res) => {
    try {
        let dryfruit = await Dryfruit.find({});
        // seeddry();
        res.render("products/show", { collection: dryfruit, Productname : "Dry Fruits" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Flour/:id", isLoggedIn,async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Flour.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Flour" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Flour", isLoggedIn,async (req, res) => {
    try {
        let flour = await Flour.find({});
        // seedflour();
        res.render("products/show", { collection: flour, Productname : "Flour" });        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get(`/Beverages/:id`,isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundproduct = await Beverage.findById(id).populate("reviews");
        res.render("products/buy", { foundproduct, Productname: "Beverages" ,msg : req.flash('success')});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.get("/Beverages",isLoggedIn, async (req, res) => {
    try {
        let beverage = await Beverage.find({});
        // seedbev()
        res.render("products/show", { collection: beverage, Productname : "Beverages"});        
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
// edit and delete is left 
// to edit product categories
// router.get("/products/:id/edit",async(req,res)=>{
//     let {id} = req.params;
//     console.log(req.params);
//     let foundproduct = await Product.findById(id);
//     console.log(foundproduct);
//     res.render("products/edit",{foundproduct});
// })
// router.patch("/products/:id",validateProduct,async(req,res)=>{
//     let {id} = req.params;
//     let {name,img,price,desc} = req.body;
//     await Product.findByIdAndUpdate(id,{name,img,price,desc});
//     req.flash("success","product edited successfully");
//     res.redirect(`/products/${id}`);
// })
// router.delete("/products/:id",async(req,res)=>{
//    let {id} = req.params;
//    const product = await product.findById(id);
//    for(let id of product.reviews){
//     await Review.findByIdAndDelete(id);
//    }
//     await Product.findByIdAndDelete();
//      req.flash('success',"Product deleted succesfully!!");
//     res.redirect("/products");
// })
module.exports = router;