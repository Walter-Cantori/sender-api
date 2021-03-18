import * as Joi from 'joi';

export const createProjectValidator = {
  body: Joi.object({
    name: Joi.string().required(),
    parentProject: Joi.string().allow(null),
    variables: Joi.object(),
  }),
};
