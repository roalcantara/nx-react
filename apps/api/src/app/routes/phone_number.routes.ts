import { phoneNumberRepository } from '../domain'
import { routeFactory } from './route.factory'

export const phoneNumberRoutes = routeFactory.build('number', phoneNumberRepository)
