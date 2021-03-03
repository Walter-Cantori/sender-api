import { APIGatewayProxyHandler } from 'aws-lambda';

const handler: APIGatewayProxyHandler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };

  return response;
};

export { handler };

// function setupDynamoDB() {
//   if (process.env.IS_LOCAL) {
//     const host = process.env.DB_HOST;
//     const port = process.env.DB_PORT;
//     return new DynamoDB.DocumentClient({
//       region: host,
//       accessKeyId: 'DEFAULT_ACCESS_KEY',
//       secretAccessKey: 'DEFAULT_SECRET',
//       endpoint: new Endpoint(`http://${host}:${port}`),
//     });
//   }
//   return new DynamoDB.DocumentClient();
// }
// const dynamoDB = setupDynamoDB();

//   const data = {
//     TableName: process.env.DbTableName || '',
//     Item: {
//       id: v4(),
//       createdAt: new Date().toISOString(),
//       name: 'testname',
//     },
//   };
//   console.log('writing data to db');

//   await dynamoDB.put(data).promise();

//   console.log('reading from db');
//   const result = await dynamoDB
//     .scan({
//       TableName: 'projects',
//     })
//     .promise();
