import * as dynamoose from 'dynamoose';

const { Schema } = dynamoose;

const schema = new Schema({
  id: {
    type: String,
    required: true,
    hashKey: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const model = dynamoose.model(process.env.DbTableName as string, schema);
