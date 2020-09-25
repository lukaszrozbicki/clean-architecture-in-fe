import { ContainerModule } from "inversify"
import { GetBeersUseCase, getGetBeersUseCase } from '../domain/beers/get-beers-use-case';
import { domainSymbols } from '../domain/domain-symbols';
import { injectDependencies } from './common/helpers';
import { BeerRepository } from '../domain/beers/beer-repository';
import { dataSymbols } from '../data/data-symbols';
import { getRestBeerSource } from '../data/sources/rest/rest-beer-source';
import { BeerSource } from '../data/beer-source';
import { getBeerRepository } from '../data/beers/beer-repository';

export const beerModule = new ContainerModule((bind) => {
  bind<BeerSource>(dataSymbols.BeerSource)
    .toDynamicValue(injectDependencies(
      getRestBeerSource,
    ))

  bind<BeerRepository>(dataSymbols.BeerRepository)
    .toDynamicValue(injectDependencies(
      getBeerRepository,
      [
        dataSymbols.BeerSource,
      ],
    ))

  bind<GetBeersUseCase>(domainSymbols.GetBeerListUseCase)
    .toDynamicValue(injectDependencies(
      getGetBeersUseCase,
      [
        dataSymbols.BeerRepository,
      ],
    ))
})
