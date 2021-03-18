import { Model } from 'dynamoose';

export interface IRepository {
  model: Model;
  create<T>(item: T): Promise<T>;
  update<T>(item: T): Promise<T>;
  findOne<T>(id: string): Promise<T>;
  findAll<T>(): Promise<T[]>;
  delete(id: string): Promise<void>;
}
