import { BeerItem } from './models';
import { BeerListRequestObject } from './request-objects';

export interface BeerRepository {
  getAll: (params: BeerListRequestObject) => Promise<BeerItem[]>
}
