import { Context, Handler } from 'aws-lambda';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DynamoDB, Endpoint } from 'aws-sdk';
import { v4 } from 'uuid';

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
  console.log('writing data to db');

  await dynamoDB.put(data).promise();

  console.log('reading from db');
  const result = await dynamoDB
    .scan({
      TableName: 'projects',
    })
    .promise();
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};

export { hello };
