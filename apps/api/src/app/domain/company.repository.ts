import { database } from '../data/database'
import { repositoryFactory } from '@demo/data'

const db = database.build()

export const companyRepository = repositoryFactory.build(db.companies.map, db.companies.entries)
