import { Model } from 'dynamoose';
import { promisify } from 'util';

import { IRepository } from '../interfaces/IRepository';

class BaseRepository implements IRepository {
  model: Model;

  constructor({ model }: { model: Model }) {
    this.model = model;
  }

  async create<T>(item: T): Promise<T> {
    return promisify(this.model.create)(item) as Promise<T>;
  }

  async findOne<T>(item: string): Promise<T> {
    return promisify(this.model.query)(item) as Promise<T>;
  }

  async findAll<T>(item: string): Promise<T> {
    return promisify(this.model.scan)(item) as Promise<T>;
  }
}

export default BaseRepository;
