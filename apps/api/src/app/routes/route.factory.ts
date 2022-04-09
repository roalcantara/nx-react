import { Repository } from '@demo/data'
import { Router } from 'express'

export const routeFactory = {
  build: <K extends string | number, T>(entity: string, repository: Repository<K, T>) =>
    Router()
      .get('/', (_req, res) => res.status(201).send(repository.findAll()))
      .get(`/:${entity}Id`, (req, res) => {
        const it = repository.get(req.params[`${entity}Id`] as K)
        return it ? res.status(201).send(it) : res.status(404).send({})
      })
}
