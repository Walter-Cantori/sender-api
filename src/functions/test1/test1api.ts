import { Handler } from 'aws-lambda';

import { generateResponse } from '../../services/test1.service';

const handler: Handler = async () => {
  const param = 'test1 handler v1';
  return generateResponse(param);
};

export { handler };
