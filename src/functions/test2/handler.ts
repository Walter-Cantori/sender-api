import { Handler } from 'aws-lambda';

import { generateResponse } from '../../services/test1.service';

const handler: Handler = async () => {
  const param = 'test2 v1';
  return generateResponse(param);
};

export { handler };
