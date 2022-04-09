import { companyRepository, phoneNumberRepository } from '../domain'
import { routeFactory } from './route.factory'

export const companyRoutes = routeFactory.build('company', companyRepository).get('/:companyId/numbers', (req, res) => {
  const companies = phoneNumberRepository.where((it) => it.company_id === Number(req.params.companyId))
  return companies && companies.length ? res.status(201).send(companies) : res.status(404).send({})
})
