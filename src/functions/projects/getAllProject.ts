import { APIGatewayProxyEvent, Handler } from 'aws-lambda';

import { createInstance } from '../../core/factories/projectFactory';

const projectService = createInstance();
const handler: Handler = async (event: APIGatewayProxyEvent) => {
  try {
    const projects = await projectService.findAll();

    return {
      statusCode: 200,
      body: JSON.stringify(projects),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e }),
    };
  }
};

export { handler };
