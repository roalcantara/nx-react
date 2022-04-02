import { render } from '@testing-library/react'

import CompanyList from './company-list'

describe('CompanyList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyList companies={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
