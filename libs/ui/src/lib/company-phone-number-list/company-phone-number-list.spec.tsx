import { render } from '@testing-library/react'
import CompanyPhoneNumberList from './company-phone-number-list'

describe('CompanyPhoneNumberList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyPhoneNumberList phones={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
