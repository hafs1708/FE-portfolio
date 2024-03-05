import Joi from "joi";

export const isCreateBlog = Joi.object({
    title: Joi.string().trim().min(3).max(255).required().label("Title"),
    content: Joi.string().trim().min(3).required().label("Content"),
});