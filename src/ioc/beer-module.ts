import { ContainerModule } from "inversify"
import { GetBeersUseCase, getGetBeersUseCase } from '../domain/beers/get-beers-use-case';
import { domainSymbols } from '../domain/domain-symbols';
import { injectDependencies } from './common/helpers';

export const beerModule = new ContainerModule((bind) => {
    bind<GetBeersUseCase>(domainSymbols.GetBeerListUseCase)
        .toDynamicValue(injectDependencies(
            getGetBeersUseCase,
            [

            ],
        ))
})
