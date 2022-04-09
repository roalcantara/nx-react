import { repositoryFactory } from '@demo/data'
import { database } from '../data/database'

const db = database.build()

export const phoneNumberRepository = repositoryFactory.build(db.phone_numbers.map, db.phone_numbers.entries)
