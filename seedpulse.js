const mongoose = require("mongoose");
const { name } = require("ejs");
const Pulses = require("./models/Pulse");
const products = [
    {
        name : "KT CHANA DAL 1KG",
        img:"https://m.media-amazon.com/images/I/91VAAL5r4xL.jpg",
        price : "3.20",
    },
    {
        name : "KT TOOR DAL 1KG",
        img:"https://5.imimg.com/data5/SELLER/Default/2021/2/GR/IP/DB/88842465/tur-dal-1kg.jpg",
        price : "5.20",
    },
    {
        name : "KT URID DAL 1KG",
        img:"https://5.imimg.com/data5/ECOM/Default/2022/8/JB/WW/FH/71853916/image-f8cc7931-42cb-4fab-9941-5d67f1eee945-500x500.jpg",
        price : "4.60",
    },
    {
        name : "KEMCHHO CHANA DAL 270G",
        img:"https://www.curryfavour.co.za/wp-content/uploads/2021/09/Kemchho-Chana-Dal-e1632120248406.jpg",
        price : "3.99",
    },
    {
        name : "SAURBHI MUNG DAL 1KG",
        img:"https://localcart.com.au/cdn/shop/products/20211126_103918.jpg?v=1637895979",
        price : "4.30",
    },
    {
        name : "SAURBHI CHANA DAL 1KG",
        img:"https://localcart.com.au/cdn/shop/products/20211109_155303_1024x1024.png?v=1636503472",
        price : "3.20",
    },
    {
        name : "SAURBHI TOOR DAL 5KG",
        img:"https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjlmMTI2MjgzNmY0MTFkMDc1ZDU4NGVhZGQ3NTBhMjBmIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=aceab4b309e727620dfdbbae308e119cc50832a0b319220fa8a80c1794cc471d",
        price : "25.40",
    },
    {
        name : "SAURBHI DALIYA GRAM 908G",
        img:"https://krishnaonline.com.au/userFiles/ProductImage/637704523072795993.jpg",
        price : "6.29",
    },
    {
        name : "ORGANIC MASOOR DAL 1KG",
        img:"https://www.bigbasket.com/media/uploads/p/xxl/100448215_4-24-mantra-organic-masoor-dal.jpg",
        price : "7.70",
    },
    {
        name : "ORGANIC MOONG DAL 1KG",
        img:"https://m.media-amazon.com/images/I/71BDGHAUKAL._AC_UF1000,1000_QL80_.jpg",
        price : "8.50",
    },
    {
        name : "ORGANIC CHANA DAL 1KG",
        img:"https://www.jiomart.com/images/product/original/491349603/24-mantra-organic-chana-dal-1-kg-product-images-o491349603-p590127000-1-202203252310.jpg?im=Resize=(1000,1000)",
        price : "8.30",
    },
    {
        name : "ORGANIC TOOR DAL 1KG",
        img:"https://www.bigbasket.com/media/uploads/p/l/301974_4-24-mantra-organic-toor-dal.jpg",
        price : "7.00",
    },
    {
        name : "GG FRIED CHANA DAL 285G",
        img:"https://rukminim2.flixcart.com/image/850/1000/kmmcrrk0/pulses/s/b/5/0-490-valuelife-fried-gram-fried-gram-value-life-original-imagfhehhyfe4wjr.jpeg?q=20&crop=false",
        price : "3.50",
    },
    {
        name : "GG FRIED MOONG DAL 285G",
        img:"https://localcart.com.au/cdn/shop/products/GarviGujaratFriedMoongDal285g.png?v=1654129186",
        price : "3.50",
    },
    {
        name : "HALDIRAM NAGPUR CHATPATA DAL 150G",
        img : "https://m.media-amazon.com/images/I/71X99NKeqJL._AC_UF1000,1000_QL80_.jpg",
        price : "2.75",
    },
    {
        name : "HALDIRAM NAGPUR MOONG DAL 350G",
        img : "https://m.media-amazon.com/images/I/9131ZPzQNSL.jpg",
        price : "5.20",
    }
];
async function seedDB(){
    await Pulses.insertMany(products);
    console.log("data seeded successfully");
}
module.exports = seedDB;