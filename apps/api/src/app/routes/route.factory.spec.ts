import { routeFactory } from './route.factory'

describe('#routeFactory', () => {
  it('is defined', () => {
    expect(routeFactory).toBeDefined()
  })

  describe('#build', () => {
    test.todo('builds a route')
    describe('#route', () => {
      test.todo('has a get / endpoint')

      describe('#GET /', () => {
        test.todo('returns 201')
        test.todo('returns a list of entities')
      })

      test.todo('has a get /entityId endpoint')

      describe('#GET /:entityId', () => {
        test.todo('returns 201')
        test.todo('returns a entity')

        describe('when there is no entity for a given id', () => {
          test.todo('returns 404')
        })
      })
    })
  })
})
