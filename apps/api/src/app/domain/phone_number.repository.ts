import { database } from '../data/database'
import { repositoryFactory } from '@demo/data'

const db = database.build()

export const phoneNumberRepository = repositoryFactory.build(db.phone_numbers.map, db.phone_numbers.entries)
