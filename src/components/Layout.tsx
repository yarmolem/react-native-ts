import { ReactNode } from 'react'

interface LayoutProps {
  title: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div>
      <h2 className="text-4xl mb-4">{title}</h2>
      {children}
    </div>
  )
}

export default Layout
