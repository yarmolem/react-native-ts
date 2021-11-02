import styles from './index.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variants?: 'solid' | 'outline'
}

const Button = ({
  children,
  variants = 'solid',
  className,
  ...props
}: ButtonProps) => {
  const stylesClass = [className, styles.btn, styles[variants]].join(' ')
  return (
    <button {...props} className={stylesClass}>
      {children}
    </button>
  )
}

export default Button
