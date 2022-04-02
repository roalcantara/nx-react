/* eslint-disable import/no-unresolved */
import { PhoneNumber } from '@demo/domain'
import { Get, GoBackButton, PhoneNumberItem } from '@demo/ui'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Phone = () => {
  const { numberId } = useParams()
  const [number, setNumber] = useState<PhoneNumber>({} as PhoneNumber)
  const [error, setError] = useState(null)

  useEffect(() => {
    Get('number', numberId)
      .then(setNumber)
      .catch((err) => setError(err.message))
  }, [numberId])

  return (
    <section>
      <GoBackButton />
      <article>
        {error && <p>{error}</p>}
        {number && <PhoneNumberItem phone={number} />}
      </article>
    </section>
  )
}

export default Phone
