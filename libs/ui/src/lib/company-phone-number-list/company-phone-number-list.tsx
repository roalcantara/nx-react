import { PhoneNumber } from '@demo/domain'
import { Link } from 'react-router-dom'
import styles from './company-phone-number-list.module.scss'

export type CompanyPhoneNumberListProps = {
  phones: PhoneNumber[]
}

export const CompanyPhoneNumberList = ({ phones }: CompanyPhoneNumberListProps) => (
  <table className={styles['container']}>
    <thead>
      <tr>
        <th>Number</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {phones.map((phoneNumber) => (
        <tr key={phoneNumber.id}>
          <td>
            <Link to={{ pathname: `/number/${phoneNumber.id}` }}>{phoneNumber.id}</Link>
          </td>
          <td>{phoneNumber.type}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default CompanyPhoneNumberList
