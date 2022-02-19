import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import CustomRequest from '../../types/CustomRequest';
import UnauthorizedError from '../../errors/UnauthorizedError';

const { JWT_SECRET } = process.env;

export const validateAuthHeader = (
  request: CustomRequest,
  _response: Response,
  next: NextFunction
) => {
  if (JWT_SECRET) {
    const authorization = request.headers.authorization || '';

    try {
      const [, token] = authorization.split(' ');
      request.user = jwt.verify(token, Buffer.from(JWT_SECRET));
    } catch (err: any) {
      throw new UnauthorizedError(
        err?.message || 'Authorization token is invalid'
      );
    }

    return next();
  }

  throw new Error('JWT_SECRET must be provided');
};
