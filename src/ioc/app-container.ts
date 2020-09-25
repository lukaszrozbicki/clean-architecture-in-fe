import { Container } from "inversify"

export const appContainer = new Container({
    defaultScope: "Singleton",
    skipBaseClassChecks: true,
})
