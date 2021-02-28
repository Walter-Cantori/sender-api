import { Model } from 'dynamoose';
import { promisify } from 'util';

class BaseRepository {
  model: Model;

  constructor({ model }: { model: Model }) {
    this.model = model;
  }

  async create(item) {
    return promisify(this.model.create)(item);
  }

  async findOne(item) {
    return promisify(this.model.query)(item);
  }

  async findAll(item) {
    return promisify(this.model.scan)(item);
  }
}

export default BaseRepository;
