import request, { Response } from 'supertest';
import CustomServer from '../src/types/CustomServer';
import server from '../src/server';
import MongoMock from '../__mocks__/database/mongooseMock';
import requestMock from '../__mocks__/api-requests/transactions';

const { TEST_AUTH_TOKEN } = process.env;
const jwtToken = `Bearer ${TEST_AUTH_TOKEN}`;

describe('Transactions', () => {
  let app: CustomServer;

  beforeAll(async () => {
    await MongoMock.connect();
    app = server.express;
  });

  afterAll(async () => {
    if (app.close) {
      app.close();
      await MongoMock.close();
    }
  });

  describe('Transactions Store', () => {
    it('Shound get id validator rule', done => {
      request(app)
        .post('/transactions')
        .set('authorization', jwtToken)
        .send(requestMock.createTransactionIdError)
        .expect(400)
        .then((response: Response) => {
          expect(response.body.message).toBe('"user_id" is required');
          done();
        });
    });

    it('Shound get amount validator rule', done => {
      request(app)
        .post('/transactions')
        .set('authorization', jwtToken)
        .send(requestMock.createTransactionAmountError)
        .expect(400)
        .then((response: Response) => {
          expect(response.body.message).toBe('"amount" is required');
          done();
        });
    });

    it('Shound get type validator rule', done => {
      request(app)
        .post('/transactions')
        .set('authorization', jwtToken)
        .send(requestMock.createTransactionTypeError)
        .expect(400)
        .then((response: Response) => {
          expect(response.body.message).toBe(
            '"type" must be one of [CREDIT, DEBIT]'
          );
          done();
        });
    });

    it('Shound create one transaction', done => {
      request(app)
        .post('/transactions')
        .set('authorization', jwtToken)
        .send(requestMock.createTransaction)
        .expect(201)
        .then((response: Response) => {
          expect(response.body).toHaveProperty('_id');
          done();
        });
    });

    it('Shound get unauthorized error', done => {
      request(app)
        .post('/transactions')
        .send(requestMock.createTransaction)
        .expect(401)
        .then((response: Response) => {
          expect(response.body.message).toBe('jwt must be provided');
          done();
        });
    });
  });

  describe('Transactions Index', () => {
    it('Shound get a list of Transactions', done => {
      request(app)
        .get('/transactions')
        .set('authorization', jwtToken)
        .expect(200)
        .then((response: Response) => {
          expect(response.body[0]).toHaveProperty('_id');
          done();
        });
    });

    it('Shound get type validator rule', done => {
      request(app)
        .get('/transactions')
        .set('authorization', jwtToken)
        .query({ type: 'credit' })
        .expect(400)
        .then((response: Response) => {
          expect(response.body.message).toBe(
            '"type" must be one of [CREDIT, DEBIT]'
          );
          done();
        });
    });

    it('Shound validate credit filter', done => {
      request(app)
        .get('/transactions')
        .set('authorization', jwtToken)
        .query({ type: 'CREDIT' })
        .expect(200)
        .then((response: Response) => {
          expect(response.body).toMatchObject([]);
          done();
        });
    });

    it('Shound validate debit filter', done => {
      request(app)
        .get('/transactions')
        .set('authorization', jwtToken)
        .query({ type: 'DEBIT' })
        .expect(200)
        .then((response: Response) => {
          expect(response.body[0]).toHaveProperty('_id');
          done();
        });
    });

    it('Shound get unauthorized error', done => {
      request(app)
        .get('/transactions')
        .send(requestMock.createTransaction)
        .expect(401)
        .then((response: Response) => {
          expect(response.body.message).toBe('jwt must be provided');
          done();
        });
    });
  });

  describe('Transactions Balance', () => {
    it('Shound get transactions balance', done => {
      request(app)
        .get('/balance')
        .set('authorization', jwtToken)
        .expect(200)
        .then((response: Response) => {
          expect(response.body).toHaveProperty('amount');
          done();
        });
    });

    it('Shound get unauthorized error', done => {
      request(app)
        .get('/balance')
        .send(requestMock.createTransaction)
        .expect(401)
        .then((response: Response) => {
          expect(response.body.message).toBe('jwt must be provided');
          done();
        });
    });
  });
});
