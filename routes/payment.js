const express = require("express");
const router = express.Router();
const axios = require("axios");
const request = require("request");
const jsSHA = require("jssha");
const {v4:uuid} = require("uuid");
const User = require("../models/User");
const stripe = require('stripe')(process.env.stripe);
router.post('/paymentgateway/payumoney', async (req, res) =>{
    if (req.isAuthenticated()) {
        let user = await User.findById(req.user._id).populate("cart.itemid");

        // Create line items array from the user's cart
        const line_items = user.cart.map(item => ({
            price_data: {
                currency: 'aud', // Ensure the currency is correct
                product_data: {
                    name: item.itemid.name,
                },
                unit_amount: parseFloat(item.itemid.price.toString()) * 100, // Stripe expects amount in cents
            },
            quantity: item.quantity,
        }));

        // Create the Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: 'https://indianspicemart-cuwn.onrender.com/success',
            cancel_url: 'https://indianspicemart-cuwn.onrender.com/cancel',
        });

        // Redirect to the Stripe session URL
        res.redirect(303, session.url);
    } else {
        req.flash("error", "Please login to proceed with the payment.");
        res.redirect("/login");
    }
});

// Route for handling successful payment response
router.get('/success', (req, res) => {
    req.flash("success", "Payment Successful!!, Thank You for shopping with IndianSpiceMart");
    res.redirect("/");
});

// Route for handling failed payment response
router.get('/cancel', (req, res) => {
    // Handle failed response from PayUmoney
    req.flash("error", "Payment Failed");
    res.redirect("/cart");
});

module.exports = router;




//We are using request for making an HTTP/HTTPS call to payumoney server
// router.post('/payment_gateway/payumoney',(req, res) => {
// req.body.txnid = uuid()//Here pass txnid and it should be different on every call
// req.body.email = req.user.email;
// req.body.firstname = req.user.firstname;
// //Here save all the details in pay object 
//  const pay = req.body;
// const hashString = process.env.MERCHANT_KEY //store in in different file
//  + '|' + pay.txnid
//  + '|' + pay.amount 
//  + '|' + pay.productinfo 
//  + '|' + pay.firstname 
//  + '|' + pay.email 
//  + '|' + '||||||||||'
//  + process.env.MERCHANT_SALT //store in in different file
// const sha = new jsSHA('SHA-512', "TEXT");
// sha.update(hashString);
// //Getting hashed value from sha module
//  const hash = sha.getHash("HEX");
 
//  //We have to additionally pass merchant key to API so remember to include it.
// pay.key = process.env.MERCHANT_KEY //store in in different file;
//  pay.surl = 'http://localhost:8080/payment/success';
//  pay.furl = 'http://localhost:8080/payment/fail';
//  pay.hash = hash;
//  console.log("string hashed successfully");
// //Making an HTTP/HTTPS call with request
// console.log("request");
// request.post({
//  headers: {
//  'Accept': 'application/json',
//  'Content-Type': 'application/json'
//  },
//  url: 'https://sandboxsecure.payu.in/_payment', //Testing url
//  form: pay
//  }, function (error, httpRes, body) {
// if (error) 
//  res.send(
//  {status: false, 
//  message:error.toString()
//  }
//  );
// if (httpRes.statusCode === 200) {
//  res.send(body);
//  } else if (httpRes.statusCode >= 300 && 
//  httpRes.statusCode <= 400) {
//  res.redirect(httpRes.headers.location.toString());
//  }
//  })
// });
// router.post('/payment/success', (req, res) => {
//     //Payumoney will send Success Transaction data to req body. 
//     //  Based on the response Implement UI as per you want
//      res.send(req.body);
//     })
//     router.post('/payment/fail', (req, res) => {
//         //Payumoney will send fail Transaction data to req body. 
//         //  Based on the response Implement UI as per you want
//          res.send(req.body);
//     })
// module.exports = router;
