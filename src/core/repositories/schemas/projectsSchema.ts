import * as dynamoose from 'dynamoose';

const { Schema } = dynamoose;

const projectSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      hashKey: true,
    },
    name: {
      type: String,
      required: true,
      rangeKey: true,
    },
    parentProject: {
      type: String,
      required: false,
    },
    variables: {
      type: Object,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const model = dynamoose.model('project', projectSchema);
