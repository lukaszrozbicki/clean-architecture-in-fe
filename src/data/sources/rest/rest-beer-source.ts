import { BeerSource } from '../../beer-source';
import { BeerListRequestObject } from '../../../domain/beers/request-objects';
import { BeerResponseItem } from '../../responses/beers';
import { beersRestEndpoints } from './endpoints';

export const getRestBeerSource = (): BeerSource => ({
  async fetchBeerList(params: BeerListRequestObject): Promise<BeerResponseItem[]> {
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([param, value]) => {
      queryParams.append(param,`${value}`)
    })

    const url = `${beersRestEndpoints.LIST}?${queryParams.toString()}`

    const response = await fetch(url)

    return response.json()
  }
})
