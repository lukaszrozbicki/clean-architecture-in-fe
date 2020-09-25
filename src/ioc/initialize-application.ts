import { appContainer } from "./app-container"
import { beerModule } from './beer-module'

export const initializeApplication = () => {
    appContainer.load(beerModule)
    // appContainer.load(applicationModule)

    // const bootstrapApp = appContainer.get<BootstrapApp>(ApplicationSymbols.BootstrapApp)

    // bootstrapApp()
}
