import { GetBeersUseCase } from '../domain/beers/get-beers-use-case';

export const getDevToolsClient = (getBeersUseCase: GetBeersUseCase) => () => {
  // @ts-ignore
  window.Beers = {
    showBeerList: getBeersUseCase.execute,
  }

  console.log("Welcome to devtools interface for Beer API! Type")
  console.log(" window.Beers.showBeerList() - to see the beer list")
}
