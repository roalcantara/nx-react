import { companyRoutes } from './company.routes'

describe('#companyRoutes', () => {
  it('is defined', () => {
    expect(companyRoutes).toBeDefined()
  })

  describe('#GET /', () => {
    test.todo('returns 201')
    test.todo('returns a list of Companies')
  })

  test.todo('has a get /companyId endpoint')

  describe('#GET /:companyId', () => {
    test.todo('returns 201')
    test.todo('returns a Company')

    describe('when there is no company for a given id', () => {
      test.todo('returns 404')
    })
  })
})
