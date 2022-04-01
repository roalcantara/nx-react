/* eslint-disable import/no-unresolved */
import { Company } from '@demo/domain'
import { Get, CompanyList } from '@demo/ui'
import { useEffect, useState } from 'react'

export const Companies = () => {
  const [items, setCompanies] = useState<Company[]>([])
  const [error, setError] = useState(null)

  useEffect(() => {
    Get()
      .then(setCompanies)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <article>
      {error && <p>{error}</p>}
      {items && <CompanyList companies={items} />}
    </article>
  )
}

export default Companies
