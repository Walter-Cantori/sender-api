import { APIGatewayProxyHandler } from 'aws-lambda';
// eslint-disable-next-line import/no-extraneous-dependencies
import AWS from 'aws-sdk';
import { Parser } from 'json2csv';

const handler: APIGatewayProxyHandler = async () => {
  const S3 = new AWS.S3({
    s3ForcePathStyle: true,
    endpoint: new AWS.Endpoint('http://localhost:8000'),
    accessKeyId: 'S3RVER',
    secretAccessKey: 'S3RVER',
  });
  await S3.putObject({
    Bucket: process.env.PROJECTS_UPLOAD_BUCKET || '',
    Key: '1234',
    // eslint-disable-next-line no-buffer-constructor
    Body: new Buffer('abcd'),
  }).promise();

  const json = {};
  const fields = ['name', 'parent'];
  const opts = { fields };
  const parser = new Parser(opts);
  const csv = parser.parse(json);
  console.log(csv);

  return {
    statusCode: 201,
    body: JSON.stringify({ ok: 'ok' }),
  };
};

export { handler };
