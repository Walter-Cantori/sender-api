import { Model } from 'dynamoose';
import { promisify } from 'util';

class BaseRepository {
  model: Model;

  constructor({ model }: { model: Model }) {
    this.model = model;
  }

  async create(item: unknown) {
    return promisify(this.model.create)(item);
  }

  async findOne(item: string) {
    return promisify(this.model.query)(item);
  }

  async findAll(item: string) {
    return promisify(this.model.scan)(item);
  }
}

export default BaseRepository;
