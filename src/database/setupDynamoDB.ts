import { DynamoDB, Endpoint } from 'aws-sdk';

export function setupDynamoDB() {
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
