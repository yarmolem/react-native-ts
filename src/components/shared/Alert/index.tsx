import { InfoIcon } from '../../../icons'
import styles from './index.module.css'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  variants?: 'success' | 'danger' | 'info'
}

const Alert = ({
  className,
  title = 'TITULO',
  description = '',
  variants = 'success'
}: AlertProps) => {
  const stylesClass = [className, styles.alert, styles[variants]].join(' ')

  return (
    <div role="alert" className={stylesClass}>
      <InfoIcon className="w-5 h-5 inline mr-3" />
      <span className="font-medium">{title}</span> {description}
    </div>
  )
}

export default Alert
