import styles from './index.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variants?: 'solid' | 'outline'
  colorSchema?: 'blue' | 'red'
}

const Button = ({
  children,
  className,
  variants = 'solid',
  colorSchema = 'blue',
  ...props
}: ButtonProps) => {
  const stylesClass = [
    'group',
    className,
    styles.btn,
    styles[variants],
    styles[colorSchema]
  ].join(' ')
  return (
    <button {...props} className={stylesClass}>
      <span className="group-hover:text-white">{children}</span>
    </button>
  )
}

export default Button
