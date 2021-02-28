class BaseService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async create(item) {
    return this.repository.crate(item);
  }

  async findOne(item) {
    return this.repository.findOne(item);
  }

  async findAll(item) {
    return this.repository.findAll(item);
  }
}

export default BaseService;
