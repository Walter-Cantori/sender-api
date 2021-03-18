import { APIGatewayProxyEvent, Handler } from 'aws-lambda';

import { createInstance } from '../../core/factories/projectFactory';

interface Project {
  name: string;
  parentProject: string;
  variables: { [key: string]: unknown };
}

const projectService = createInstance();
const handler: Handler = async (event: APIGatewayProxyEvent) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const id = event.pathParameters?.id ?? undefined;

    if (id) {
      const existingProject = await projectService.findOne(id);

      const updateProject = {
        // @ts-ignore
        ...existingProject,
        ...body,
      };

      const project = await projectService.update(updateProject);

      return {
        statusCode: 200,
        body: JSON.stringify(project),
      };
    }

    throw new Error('item not found');
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e }),
    };
  }
};

export { handler };
