/* eslint-disable import/no-unresolved */
import { PhoneNumber } from '@demo/domain'
import { Get, CompanyPhoneNumberList, GoBackButton } from '@demo/ui'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type CompanyProps = {
  title: string
}

export const Company = (props: CompanyProps) => {
  const { companyId } = useParams()
  const [error, setError] = useState(null)
  const [items, setCompanies] = useState<PhoneNumber[]>([])

  useEffect(() => {
    Get('company', companyId, 'numbers')
      .then(setCompanies)
      .catch((err) => setError(err.message))
  }, [companyId])

  return (
    <section>
      <GoBackButton />
      <article>
        <h1>{props.title}</h1>
        {error && <p>{error}</p>}
        {items && <CompanyPhoneNumberList phones={items} />}
      </article>
    </section>
  )
}

export default Company
