import { companyRepository } from '../domain'
import { phoneNumberRepository } from '../domain'
import { routeFactory } from './route.factory'

export const companyRoutes = routeFactory.build('company', companyRepository).get('/:companyId/numbers', (req, res) => {
  const it = phoneNumberRepository.where((it) => it.company_id === Number(req.params.companyId))
  return it && it.length ? res.status(201).send(it) : res.status(404).send({})
})
