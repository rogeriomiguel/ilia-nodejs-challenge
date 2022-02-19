import { connect } from 'mongoose';

const connectionString = process.env.MONGOOSE_CONNECTION_STRING || '';

const mongooseConnection = () => connect(connectionString);

export default mongooseConnection;
