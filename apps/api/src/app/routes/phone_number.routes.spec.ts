import { phoneNumberRoutes } from './phone_number.routes'

describe('#phoneNumberRoutes', () => {
  it('is defined', () => {
    expect(phoneNumberRoutes).toBeDefined()
  })

  describe('#GET /', () => {
    test.todo('returns 201')
    test.todo('returns a list of PhoneNumbers')
  })

  test.todo('has a get /numberId endpoint')

  describe('#GET /:numberId', () => {
    test.todo('returns 201')
    test.todo('returns a PhoneNumber')

    describe('when there is no PhoneNumber for a given id', () => {
      test.todo('returns 404')
    })
  })
})
