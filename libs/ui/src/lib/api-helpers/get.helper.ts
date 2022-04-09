import { handleResponse } from './response.handler.helper'

const ENDPOINT = process.env['REACT_APP_API_URL'] ?? 'http://localhost:3000'

export const Get = async (...path: (string | undefined)[]) => fetch([ENDPOINT, ...path].join('/')).then(handleResponse)
