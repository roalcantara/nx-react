import { repositoryFactory } from '@demo/data'
import { database } from '../data/database'

const db = database.build()

export const companyRepository = repositoryFactory.build(db.companies.map, db.companies.entries)
