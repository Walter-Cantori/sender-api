import { Handler } from 'aws-lambda';

const handler: Handler = async () => {
  return {
    statusCode: 200,
    message: JSON.stringify({ ok: 'ok ' }),
  };
};

export { handler };
