import Joi from "joi";
import { isString100, isText, isURI } from './mainValidation.js';

export const isUpdateProfile = Joi.object({
    email: isEmail,
    firstname: isString100,
    lastname: isString100,
    dob: Joi.date().less('now'),
    address: isText,
    city: isString100,
    country: isString100,
    phone: isString100,
    job: isString100,
    phone: Joi.string().trim().max(20),
    bio: isText.allow(null, ""),
    website: isURI.allow(null, ""),
    github: isURI.allow(null, ""),
    gitlab: isURI.allow(null, ""),
    instagram: isURI.allow(null, ""),
    facebook: isURI.allow(null, ""),
    twitter: isURI.allow(null, ""),
    linkedin: isURI.allow(null, ""),
    discord: isURI.allow(null, "")
});
