import Joi from "joi";

const isID = Joi.number().min(1).positive().required().label("ID");
const isString100 = Joi.string().trim().min(3).max(100);
const isString255 = Joi.string().trim().min(3).max(255);
const isYear = Joi.number().positive();
const isText = Joi.string().trim();
const isURI = Joi.string().trim().uri();
const isEmail = Joi.string().email({
    tlds: {
        allow: false
    }
}).max(100).trim();


export {
    isID,
    isString100,
    isString255,
    isYear,
    isText,
    isURI,
    isEmail
}