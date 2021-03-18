import { Model } from 'dynamoose';

import { IRepository } from '../interfaces/IRepository';

class BaseRepository implements IRepository {
  model: Model;

  constructor({ model }: { model: Model }) {
    this.model = model;
  }

  async create<T>(item: T): Promise<T> {
    return this.model.create(item);
  }

  async update<T>(item: T): Promise<T> {
    // @ts-ignore
    const { id } = item;
    // @ts-ignore
    delete item.updatedAt;
    // @ts-ignore
    delete item.id;
    // @ts-ignore
    delete item.subType;
    return this.model.update(
      // @ts-ignore
      { id, subType: 'metadata' },
      item
    );
  }

  async findOne<T>(id: string): Promise<T> {
    console.log(id);
    return this.model.get<T>(
      { id: `project#${id}`, subType: 'metadata' },
      { return: 'document' }
    );
  }

  async delete(id: string): Promise<void> {
    return this.model.delete({ id: `project#${id}`, subType: 'metadata' });
  }

  async findAll<T>(): Promise<T[]> {
    return this.model.scan<T>().exec() as Promise<T[]>;
  }
}

export default BaseRepository;
