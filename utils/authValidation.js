import Joi from 'joi';

const isPassword = Joi.string().min(6).max(100).trim();
const isString = Joi.string().min(3).max(100).trim();

// copy dari backend
export const loginValidation = Joi.object({
    email: isEmail.required().label("Email"),
    password: isPassword.required().label("Password")
});

export const updateUserValidation = Joi.object({
    name: isString.label("Name"),
    email: isEmail.label("Email"),
    password: isPassword.label("New Password"),
    current_password: isPassword.label("Old Password"),
    confirm_password: isPassword
        .valid(Joi.ref('password'))
        .label('Confirm New Password')
        .options({
            messages: {
                'any.only': '{{#label}} not match'
            }
        })
});
