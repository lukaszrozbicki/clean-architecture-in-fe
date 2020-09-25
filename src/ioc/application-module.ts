import { ContainerModule } from "inversify"
import { injectDependencies } from './common/helpers';
import { getDevToolsClient } from '../ui/dev-tools-client';
import { uiSymbols } from '../ui/ui-symbols';
import { domainSymbols } from '../domain/domain-symbols';

export const applicationModule = new ContainerModule((bind) => {
  bind<() => void>(uiSymbols.UI)
    .toDynamicValue(injectDependencies(
      getDevToolsClient,
      [
        domainSymbols.GetBeerListUseCase,
      ]
    ))

})
