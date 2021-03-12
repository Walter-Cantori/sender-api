import { APIGatewayProxyEvent, Handler } from 'aws-lambda';

import { createInstance } from '../../core/factories/projectFactory';

const projectService = createInstance();

const handler: Handler = async (event: APIGatewayProxyEvent) => {
  const projects = await projectService.findAll();

  return {
    statusCode: 200,
    body: JSON.stringify(projects),
  };
};

export { handler };
