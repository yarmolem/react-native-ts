import React from 'react'
import styles from './index.module.css'

interface TableProps {
  children: React.ReactNode
}

const Table = ({ children }: TableProps) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden sm:rounded-lg shadow-md">
            <table className={styles.table}>{children}</table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
