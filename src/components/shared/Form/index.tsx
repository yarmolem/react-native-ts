import styles from './index.module.css'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

const Form = ({ children, ...props }: FormProps) => {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  )
}

export default Form
