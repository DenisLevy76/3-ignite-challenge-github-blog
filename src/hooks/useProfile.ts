import { useCallback, useEffect, useState } from 'react'
import { IGithubUser } from '../@types/IGithubUser'
import { api } from '../api/api'

export const useProfile = (username: string) => {
  const [profile, setProfile] = useState<IGithubUser | null>(null)

  const getProfileData = useCallback(async () => {
    const { data } = await api.get<IGithubUser>(`/users/${username}`)
    setProfile(data)
  }, [username])

  useEffect(() => {
    getProfileData()
  }, [getProfileData])

  return profile
}
