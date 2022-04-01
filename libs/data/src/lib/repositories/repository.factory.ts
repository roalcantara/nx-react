import { Repository } from './repository'

export const repositoryFactory = {
  build: <K extends string | number, T>(db: Record<K, T>, entries: Array<T>): Repository<K, T> =>
    new Repository(db, entries)
}
