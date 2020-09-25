import { BeerRepository } from '../../domain/beers/beer-repository';
import { BeerListRequestObject } from '../../domain/beers/request-objects';
import { BeerItem } from '../../domain/beers/models';
import { BeerSource } from '../beer-source';
import { beerResponseItemToDomain } from './mappers';

export const getBeerRepository = (beerSource: BeerSource): BeerRepository => ({
  async getAll(params: BeerListRequestObject): Promise<BeerItem[]> {
    const beerListResponse = await beerSource.fetchBeerList(params);

    return beerListResponse.map<BeerItem>(beerResponseItemToDomain)
  }
})
