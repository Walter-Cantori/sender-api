class BaseService {
  repository: unknown;

  constructor({ repository }: { repository: unknown }) {
    this.repository = repository;
  }

  //   async create(item: string) {
  //   }

  //   async findOne(item: string) {
  //     return this.repository.findOne(item);
  //   }

  //   async findAll(item: string) {
  //     return this.repository.findAll(item);
  //   }
}

export default BaseService;
