import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export default interface CustomRequest extends Request {
  user?: string | JwtPayload;
}
