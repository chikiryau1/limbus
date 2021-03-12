import { model, Schema, Document } from 'mongoose';

export interface SomeInstanceInterface extends Document {
  field1: string;
  field2: string;
  field3: string;
}

export const SomeInstance = model<SomeInstanceInterface>(
  'some-instance',
  new Schema({
    field1: String,
    field2: String,
    field3: String,
  }),
);
