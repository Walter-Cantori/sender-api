import { Model } from 'dynamoose';

export interface IRepository {
  model: Model;
  create<T>(item: T): Promise<T>;
  findOne<T>(item: string): Promise<T>;
  findAll<T>(): Promise<T[]>;
}
