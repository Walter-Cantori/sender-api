import { DynamoDB, Endpoint } from 'aws-sdk';
import { v4 } from 'uuid';

import { Context, Handler } from '/aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

function setupDynamoDB() {
  if (process.env.IS_LOCAL) {
    const host = process.env.DB_HOST;
    const port = process.env.DB_PORT;
    return new DynamoDB.DocumentClient({
      region: host,
      accessKeyId: 'DEFAULT_ACCESS_KEY',
      secretAccessKey: 'DEFAULT_SECRET',
      endpoint: new Endpoint(`http://${host}:${port}`),
    });
  }
  return new DynamoDB.DocumentClient();
}

const hello: Handler = async (event: any, context: Context) => {
  const dynamoDB = setupDynamoDB();

  const data = {
    TableName: process.env.DbTableName || '',
    Item: {
      id: v4(),
      createdAt: new Date().toISOString(),
      name: 'testname',
    },
  };

  await dynamoDB.put(data).promise();

  const result = await dynamoDB
    .scan({
      TableName: 'Projects-dev',
    })
    .promise();
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};

export { hello };
