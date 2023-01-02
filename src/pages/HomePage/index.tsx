import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../api/api'
import { ContainerComponent } from '../../components/ContainerComponent'
import { InputComponent } from '../../components/InputComponent'
import { PostComponent } from '../../components/PostComponent'
import { ProfileComponent } from '../../components/ProfileComponent'
import { HomePageContainer, SearchForm } from './styles'

export interface IIssue {
  id: number
  number: number
  html_url: string
  title: string
  body: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}

export interface IIssuesResp {
  total_count: number
  incomplete_results: number
  items: IIssue[]
}

export interface searchFormData {
  searchFilter: string
}

export const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<IIssue[]>([])
  const [totalPosts, setTotalPosts] = useState<number>(0)
  const { register, handleSubmit } = useForm<searchFormData>()

  const getPosts = useCallback(async (filter: string = '') => {
    const { data } = await api.get<IIssuesResp>(
      `https://api.github.com/search/issues?q=${filter}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    setPosts(data.items)
    setTotalPosts(data.total_count)
  }, [])

  const handleSearch = (data: searchFormData) => {
    getPosts(data.searchFilter)
  }

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <HomePageContainer>
      <ContainerComponent as="section">
        <ProfileComponent />
        <SearchForm onSubmit={handleSubmit(handleSearch)}>
          <div>
            <strong>Publicações</strong>
            <p>{totalPosts} publicações</p>
          </div>
          <InputComponent
            type="text"
            placeholder="Buscar conteúdo"
            {...register('searchFilter')}
          />
        </SearchForm>
        <ul className="posts__list">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <PostComponent post={post} />
              </li>
            )
          })}
        </ul>
      </ContainerComponent>
    </HomePageContainer>
  )
}
