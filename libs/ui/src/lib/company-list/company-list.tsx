import { Company } from '@demo/domain'
import styles from './company-list.module.scss'
import { Link } from 'react-router-dom'

export type CompanyListProps = {
  companies: Company[]
}

export const CompanyList = (props: CompanyListProps) => (
  <div className={styles['container']}>
    <h1>Companies</h1>
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Vatin</th>
        </tr>
      </thead>
      <tbody>
        {props.companies.map((company) => (
          <tr key={company.id}>
            <td>
              <Link to={{ pathname: `companies/${company.id}` }}>{company.name}</Link>
            </td>
            <td>{company.vatin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default CompanyList
