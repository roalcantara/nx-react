import supertest from 'supertest'
import { api } from './api'
import { companyRepository, phoneNumberRepository } from './domain'

// TODO: Change when using real datasource
const mockResources = () => ({
  company: companyRepository.first(),
  companies: companyRepository.findAll(),
  phoneNumber: phoneNumberRepository.first(),
  phoneNumbers: phoneNumberRepository.findAll()
})

describe('#api', () => {
  it('is expected to be defined', () => {
    expect(api).toBeDefined()
  })

  describe('GET', () => {
    let subject: supertest.Response
    const { company, companies, phoneNumber, phoneNumbers } = mockResources()

    describe.each([
      { path: '/', statusCode: 201, body: companies },
      { path: '/company', statusCode: 201, body: companies },
      { path: `/company/${company.id}`, statusCode: 201, body: company },
      { path: '/number', statusCode: 201, body: phoneNumbers },
      { path: `/number/${phoneNumber.id}`, statusCode: 201, body: phoneNumber },
      { path: '/foo', statusCode: 404, body: {} },
      { path: '/foo/bar', statusCode: 404, body: {} }
    ])('GET $path', ({ path, statusCode, body }) => {
      beforeAll(async () => {
        subject = await supertest(api()).get(path)
      })

      it(`returns statusCode '${statusCode}'`, () => {
        expect(subject.statusCode).toEqual(statusCode)
      })

      it(`returns body '${body}'`, () => {
        expect(subject.body).toStrictEqual(body)
      })
    })
  })
})
