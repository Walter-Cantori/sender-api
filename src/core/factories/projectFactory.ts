import ProjectRepository from '../repositories/projectRepository';
import ProjecService from '../services/projectService';

export const createInstance = () => {
  const repository = new ProjectRepository();
  const projectService = new ProjecService({ repository });

  return projectService;
};
