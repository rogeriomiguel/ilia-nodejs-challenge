export default class UnauthorizedError extends Error {
  statusCode: number;

  details: object | undefined;

  constructor(message?: string, details?: object | undefined) {
    super(message || 'Unauthorized');
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
    this.details = details;
  }
}
