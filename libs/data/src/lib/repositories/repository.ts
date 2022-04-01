export class Repository<K extends string | number, T> {
  constructor(private readonly db: Record<K, T>, private readonly entries: Array<T>) {}

  get = (key: K) => this.db[key]

  findAll = () => this.entries

  first = () => this.entries[0]

  where = (predicate: (it: T) => boolean) => this.entries.filter(predicate)
}
