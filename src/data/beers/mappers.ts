import { BeerResponseItem } from '../responses/beers';
import { BeerItem } from '../../domain/beers/models';

export const beerResponseItemToDomain = (beerResponseItem: BeerResponseItem): BeerItem => ({
  id: `${beerResponseItem.id}`,
  imageURL: beerResponseItem.image_url,
  name: beerResponseItem.name,
  slogan: beerResponseItem.tagline,
})
