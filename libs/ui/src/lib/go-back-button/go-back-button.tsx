/* eslint-disable no-restricted-globals */
import { useNavigate } from 'react-router-dom'
import styles from './go-back-button.module.scss'

export type GoBackButtonProps = {
  title?: string
}

export const GoBackButton = (props: GoBackButtonProps) => {
  const history = useNavigate()
  return (
    <button onClick={() => history(-1)} className={styles['container']}>
      {props.title || 'Go Back'}
    </button>
  )
}

export default GoBackButton
