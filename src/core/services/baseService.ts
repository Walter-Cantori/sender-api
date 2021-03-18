import { IRepository } from '../interfaces/IRepository';

class BaseService {
  repository: IRepository;

  constructor({ repository }: { repository: IRepository }) {
    this.repository = repository;
  }

  create<T>(item: T): Promise<T> {
    return this.repository.create(item);
  }

  update<T>(item: T): Promise<T> {
    return this.repository.update(item);
  }

  findOne<T>(id: string): Promise<T> {
    return this.repository.findOne(id);
  }

  delete(id: string): Promise<void> {
    return this.repository.delete(id);
  }

  findAll<T>(): Promise<T[]> {
    return this.repository.findAll();
  }
}

export default BaseService;
