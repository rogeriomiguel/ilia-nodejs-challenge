import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

class MongoMock {
  mongov?: MongoMemoryServer;

  async connect() {
    try {
      this.mongov = await MongoMemoryServer.create();
      const mongoUri = this.mongov.getUri();

      await mongoose.connect(mongoUri);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('mongooseMock', err);
    }

    return mongoose.connection;
  }

  close() {
    if (this.mongov)
      return Promise.all([
        mongoose.connection.dropDatabase,
        mongoose.connection.close,
        this.mongov.stop,
      ]);

    return null;
  }
}

export default new MongoMock();
