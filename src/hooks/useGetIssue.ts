import { useCallback, useEffect, useState } from 'react'
import { api } from '../api/api'
import { IIssue } from '../pages/HomePage'

export interface useGetIssueProps {
  issueNumber: string
  owner: string
  repo: string
}

export const useGetIssue = (issueReq: useGetIssueProps) => {
  const [issue, setIssue] = useState<IIssue | null>(null)

  const getIssue = useCallback(async () => {
    const { data } = await api.get<IIssue>(
      `https://api.github.com/repos/${issueReq.owner}/${issueReq.repo}/issues/${issueReq.issueNumber}`,
    )

    setIssue(data)
  }, [])

  useEffect(() => {
    getIssue()
  }, [getIssue])

  return issue
}
