export interface UseCase<P, T> {
  execute: (...params: P[]) => Promise<T>
}
