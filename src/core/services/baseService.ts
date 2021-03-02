import { IRepository } from '../interfaces/IRepository';

class BaseService {
  repository: IRepository;

  constructor({ repository }: { repository: IRepository }) {
    this.repository = repository;
  }

  create<T>(item: T): Promise<T> {
    return this.repository.create(item);
  }

  findOne<T>(item: string): Promise<T> {
    return this.repository.findOne(item);
  }

  findAll<T>(item: string): Promise<T> {
    return this.repository.findAll(item);
  }
}

export default BaseService;
