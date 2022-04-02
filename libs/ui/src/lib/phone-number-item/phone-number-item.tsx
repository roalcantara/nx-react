import { PhoneNumber } from '@demo/domain'
import styles from './phone-number-item.module.scss'

export interface PhoneNumberItemProps {
  phone: PhoneNumber
}

export const PhoneNumberItem = ({ phone }: PhoneNumberItemProps) => {
  return (
    <div className={styles['container']}>
      <p>{phone.id}</p>
      <p>{phone.type}</p>
    </div>
  )
}

export default PhoneNumberItem
