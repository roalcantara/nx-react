/* eslint-disable @typescript-eslint/no-explicit-any */
import * as datasource from './db.json'

export const toRecord = <T extends Record<string | number, any>, K extends keyof T>(array: T[], selector: K) =>
  array.reduce((acc, item) => ({ ...acc, [item[selector]]: item }), {} as Record<ReturnType<T[K]>, T>)

export const database = {
  build: () => ({})
}
