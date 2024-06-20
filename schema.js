// schema for server side validation
const Joi = require('joi');
const productschema = Joi.object({
    name: Joi.string().required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const frozenschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const poojaschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const pickleschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const breadschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const riceschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const pulsesschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const spicesschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const oilschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const papadschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const biryanischema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const snacksschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const rteschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const dairyschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const dryfruitschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const flourschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const beverageschema = Joi.object({
    name: Joi.string()
             .required(),
    img : Joi.string().required(),
    price : Joi.string().min(0).required(),
    desc: Joi.string().required()
})
const reviewschema = Joi.object({
    rating :Joi.string().min(0).max(5).required(),
    comment : Joi.string().required()
})
module.exports = {productschema,frozenschema,poojaschema,pickleschema,breadschema,riceschema,pulsesschema,spicesschema,oilschema,papadschema,biryanischema,snacksschema,rteschema,dairyschema,dryfruitschema,flourschema,beverageschema,reviewschema};