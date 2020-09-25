import { BeerListRequestObject } from '../domain/beers/request-objects';
import { BeerResponseItem } from './responses/beers';

export interface BeerSource {
  fetchBeerList: (params: BeerListRequestObject) => Promise<BeerResponseItem[]>
}
