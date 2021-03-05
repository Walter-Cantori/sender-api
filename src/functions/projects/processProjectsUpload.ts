import { S3Handler } from 'aws-lambda';
// eslint-disable-next-line import/no-extraneous-dependencies
import { S3, SES } from 'aws-sdk';
import { SendEmailRequest } from 'aws-sdk/clients/ses';
import csvtojson from 'csvtojson';
import { Parser } from 'json2csv';
import { pipeline, Writable } from 'stream';
import { promisify } from 'util';

const handler: S3Handler = async (event) => {
  const [
    {
      s3: {
        bucket: { name },
        object: { key },
      },
    },
  ] = event.Records;

  const s3 = new S3();
  const invalidEntries: { [key: string]: string }[] = [];

  const params = {
    Bucket: name,
    Key: key,
  };

  const fields = ['name', 'parentProject'];
  const opts = { fields };

  async function convertToCsv(json) {
    console.log('json *****', json);
    try {
      const parser = new Parser(opts);
      const csv = parser.parse(json);
      await s3
        .putObject({
          Bucket: name,
          Key: `${new Date().toISOString()}.csv`,
          Body: csv,
          ContentType: 'text/csv',
        })
        .promise();
      console.log(csv);
    } catch (err) {
      console.error(err);
    }
  }

  function processData() {
    const writableStream = new Writable({
      write: (chunk, encoding, done) => {
        const item: { [key: string]: string } = JSON.parse(chunk);
        invalidEntries.push(item);
        console.log('sending..', item, 'at', new Date().toISOString());
        setTimeout(done, 200);
      },
    });
    return writableStream;
  }

  const promisefiedPipeline = promisify(pipeline);

  await promisefiedPipeline(
    s3.getObject(params).createReadStream(),
    csvtojson(),
    processData()
  );

  convertToCsv(invalidEntries);

  const ses = new SES();
  const emailParams: SendEmailRequest = {
    Source: 'fejuca.dev@gmail.com',
    Destination: { ToAddresses: ['fejuca.dev@gmail.com'] },
    Message: {
      Subject: { Data: 'hello' },
      Body: { Text: { Data: 'Hello from Fejuca' } },
    },
  };
  await ses.sendEmail(emailParams).promise();
};

export { handler };
