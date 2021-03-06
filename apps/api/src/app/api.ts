import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { companyRoutes, phoneNumberRoutes } from './routes'

export const api = (host = 'localhost', port = 3000) =>
  express()
    .use(cors({ origin: `http://${host}:${port}` }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .all('*', (_, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      next()
    })
    .use('/company', companyRoutes)
    .use('/number', phoneNumberRoutes)
    .use('/', companyRoutes)
