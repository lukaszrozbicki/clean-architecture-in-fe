import { BeerRepository } from './beer-repository';
import { BeerListRequestObject } from './request-objects';
import { BeerItem } from './models';
import { UseCase } from '../common';

export type GetBeersUseCase = UseCase<BeerListRequestObject, BeerItem[]>

export const getGetBeersUseCase = (
  beerRepository: BeerRepository,
): GetBeersUseCase => ({
  execute: (params: BeerListRequestObject = { page: 0 }): Promise<BeerItem[]> => {
    return beerRepository.getAll(params)
  },
})
