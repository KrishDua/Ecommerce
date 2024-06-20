const express = require("express");
const Product = require("../models/Product");
const Frozen = require("../models/Frozen");
const Pooja = require("../models/Pooja");
const Review = require("../models/Review");
const Beverage = require("../models/Beverage");
const Pickle = require("../models/Pickle");
const Breads = require("../models/Bread");
const Rice = require("../models/Rice");
const Pulses = require("../models/Pulse");
const Spice = require("../models/Spice");
const Oils = require("../models/Oil");
const Papad = require("../models/Papad");
const Biryani = require("../models/Biryani");
const Snacks = require("../models/Snack");
const Rte = require("../models/Rte");
const Dairy = require("../models/Dairy");
const Dryfruit = require("../models/Dryfruit");
const Flour = require("../models/Flour");
const {validateReview} = require("../middleware");
const router = express.Router()//mini server
router.post('/Frozen%20Food/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Frozen.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Frozen%20Food/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Pooja%20samagri/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Pooja.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Pooja%20samagri/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Pickles/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Pickle.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Pickles/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Breads%20and%20eggs/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Breads.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Breads%20and%20eggs/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Rice/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Rice.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Rice/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Pulses/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Pulses.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Pulses/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Spices/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Spice.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Spices/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Oils%20and%20Ghee/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Oils.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Oils%20and%20Ghee/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Papad/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Papad.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Papad/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Biryani/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Biryani.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Biryani/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Snacks/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Snacks.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Snacks/${id}#prod`); 
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Ready%20to%20eat/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Rte.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Ready%20to%20eat/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Dairy%20Products/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Dairy.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Dairy%20Products/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Dry%20Fruits/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Dryfruit.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Dry%20Fruits/${id}#prod`);  
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post('/Flour/:id/review',validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Flour.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!")
        res.redirect(`/Flour/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
router.post("/Beverages/:id/review",validateReview,async (req, res) => {
    try {
        let { id } = req.params;
        let {rating,comment} = req.body;
        // console.log(id,rating,comment);
        const product = await Beverage.findById(id);
        const review =  new Review({rating,comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        req.flash('success',"Review added succesfully!!");
        res.redirect(`/Beverages/${id}#prod`);
    } catch (e) {
        res.status(500).render('products/error',{err : e.message});
    }
});
module.exports = router;