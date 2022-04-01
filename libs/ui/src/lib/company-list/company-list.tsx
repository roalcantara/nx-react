import { Company } from '@demo/domain'
import styles from './company-list.module.scss'

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
            <td>{company.name}</td>
            <td>{company.vatin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default CompanyList
