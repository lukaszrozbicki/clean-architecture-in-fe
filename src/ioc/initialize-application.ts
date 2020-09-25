import { appContainer } from "./app-container"
import { beerModule } from './beer-module'
import { applicationModule } from './application-module';
import { uiSymbols } from '../ui/ui-symbols';

export const initializeApplication = () => {
    appContainer.load(beerModule)
    appContainer.load(applicationModule)

    const ui = appContainer.get<() => void>(uiSymbols.UI)

    ui()
}
