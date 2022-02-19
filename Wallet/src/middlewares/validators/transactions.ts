import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import BadRequestError from '../../errors/BadRequestError';

export const validateTransactionQuery = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    type: Joi.string().valid('CREDIT', 'DEBIT').optional(),
  }).required();

  const { error } = schema.validate(request.query);

  if (error) {
    throw new BadRequestError(error.message);
  }

  next();
};

export const validateTransactionBody = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    amount: Joi.number().required(),
    type: Joi.string().valid('CREDIT', 'DEBIT').required(),
  }).required();

  const { error } = schema.validate(request.body);

  if (error) {
    throw new BadRequestError(error.message);
  }

  next();
};
