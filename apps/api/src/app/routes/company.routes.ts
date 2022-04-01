import { companyRepository } from '../domain'
import { routeFactory } from './route.factory'

export const companyRoutes = routeFactory.build('company', companyRepository)
