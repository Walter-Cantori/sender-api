import { IRepository } from '../interfaces/IRepository';
import BaseService from './baseService';

class ProjecService extends BaseService {
  constructor({ repository }: { repository: IRepository }) {
    super({ repository });
  }
}

export default ProjecService;
