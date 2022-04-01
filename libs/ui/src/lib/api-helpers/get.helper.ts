import { handleResponse } from './response.handler.helper'

export const Get = (...path: (string | undefined)[]) =>
  fetch(['http://localhost:3000', ...path].join('/')).then(handleResponse)
