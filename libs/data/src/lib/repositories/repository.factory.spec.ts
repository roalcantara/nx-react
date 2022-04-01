import { repositoryFactory } from './repository.factory'

describe('#repositoryFactory', () => {
  it('is defined', () => {
    expect(repositoryFactory).toBeDefined()
  })

  describe('#build', () => {
    test.todo('returns a repository')

    describe('when no db is given', () => {
      test.todo('throws an error')
    })

    describe('when no entries are given', () => {
      test.todo('throws an error')
    })
  })
})
