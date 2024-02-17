import Joi from 'joi';

// copy dari backend
export const loginValidation = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().label("email"),
    password: Joi.string().min(6).max(100).required().label("Password")
});