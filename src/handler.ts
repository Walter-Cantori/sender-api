import { DynamoDB } from 'aws-sdk';
import { v4 } from 'uuid';

import { Context, Handler } from '/aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = async (event: any, context: Context) => {
  const dynamoDB = new DynamoDB.DocumentClient();

  const data = {
    TableName: process.env.DYNAMODB_TABLE || '',
    Item: {
      id: v4(),
      createdAt: new Date().toISOString(),
      name: 'testname',
    },
  };

  await dynamoDB.put(data).promise();
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'github actions',
    }),
  };

  return response;
};

export { hello };
