import { APIGatewayProxyEvent, Handler } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';

import { createInstance } from '../../core/factories/projectFactory';
import { RequestValidatorService } from '../../core/services/requestValidatorService';
import { createProjectValidator } from '../../core/validators/projects/createProjectValidator';

const projectService = createInstance();

const handler: Handler = async (event: APIGatewayProxyEvent) => {
  try {
    const { name, parentProject, variables } = new RequestValidatorService(
      event,
      createProjectValidator
    ).body;

    const projects = await projectService.create({
      id: `project#${uuidv4()}`,
      subType: 'metadata',
      name,
      parentProject,
      variables,
    });

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
