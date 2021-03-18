import * as dynamoose from 'dynamoose';

const { Schema } = dynamoose;

const { IS_LOCAL } = process.env;
if (IS_LOCAL) {
  // @ts-ignore
  dynamoose.aws.ddb.local('http://localhost:4569');
}

const projectSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      hashKey: true,
    },
    subType: {
      type: String,
      required: true,
      rangeKey: true,
    },
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);

export const model = dynamoose.model('project', projectSchema);
