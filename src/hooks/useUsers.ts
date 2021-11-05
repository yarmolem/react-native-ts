import { useCallback, useEffect, useRef, useState } from 'react'

import { getAllUsers } from '../api'
import { User } from '../interfaces/UserList'

const useUsers = () => {
  const pageRef = useRef(1)
  const totalPagesRef = useRef(1)
  const [users, setUsers] = useState<User[]>([])

  const loadUsers = useCallback(async (page: number = 1) => {
    const { data, page: actualPage, total_pages } = await getAllUsers({ page })
    pageRef.current = actualPage
    totalPagesRef.current = total_pages
    setUsers(data)
  }, [])

  const nextPage = () => {
    const page = pageRef.current
    const total_pages = totalPagesRef.current
    if (page === total_pages) return

    const next = pageRef.current + 1
    loadUsers(next)
  }

  const prevPage = () => {
    const page = pageRef.current
    if (page === 0) return

    const prev = pageRef.current - 1
    loadUsers(prev)
  }

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return {
    users,
    nextPage,
    prevPage,
    paginator: `${pageRef.current} | ${totalPagesRef.current}`
  }
}

export default useUsers
