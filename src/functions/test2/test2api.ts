import { Handler } from 'aws-lambda';

import { generateResponse } from '../../services/test2.service';

const handler: Handler = async () => {
  const param = 'test2 handler v1';
  return generateResponse(param);
};

export { handler };
