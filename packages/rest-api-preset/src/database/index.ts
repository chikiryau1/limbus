import Mongoose, { Connection } from 'mongoose';
import './some-instance/schema';

let database: Connection;
const dbURI = 'mongodb://localhost/dbName';

export const connect = async (): Promise<void> => {
  if (database) {
    return;
  }

  const { connection } = await Mongoose.connect(dbURI);

  database = connection;

  database.once('open', () => {
    console.log(`Connected to database ${dbURI}`);
  });

  database.on('error', err => {
    console.log('Error connecting to database');
    console.error(err);
  });
};

export const disconnect = async (): Promise<void> => {
  if (!database) {
    return;
  }

  return Mongoose.disconnect();
};