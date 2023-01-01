import { useEffect, useState } from 'react'
import { IGithubUser } from '../@types/IGithubUser'
import { api } from '../api/api'

export const useProfile = () => {
  const [profile, setProfile] = useState<IGithubUser | null>(null)

  const getProfileData = async () => {
    const { data } = await api.get<IGithubUser>('/users/DenisLevy76')
    setProfile(data)
  }
  useEffect(() => {
    getProfileData()
  }, [])

  return profile
}
