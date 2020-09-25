import { appContainer } from '../ioc/app-container';
import { GetBeersUseCase } from '../domain/beers/get-beers-use-case';
import { domainSymbols } from '../domain/domain-symbols';
import { initializeApplication } from '../ioc/initialize-application';

describe("GetBeersUseCase", () => {
  beforeAll(() => {
    initializeApplication()
  })

  it("returns list of beers in domain shape", async () => {
    const getBeersUseCase = appContainer.get<GetBeersUseCase>(domainSymbols.GetBeerListUseCase)

    const beerList = await getBeersUseCase.execute()

    expect(beerList.length).toBe(25)
  })
})
