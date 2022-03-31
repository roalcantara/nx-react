import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export const api = (host = 'localhost', port = 3000) =>
  express()
    .use(cors({ origin: `http://${host}:${port}` }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
