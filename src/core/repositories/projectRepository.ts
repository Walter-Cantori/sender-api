import BaseRepository from './baseRepository';
import { model } from './schemas/projectsSchema';

class ProjectRepository extends BaseRepository {
  constructor() {
    super({ model });
  }
}

export default ProjectRepository;
