import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { PostContainer } from './styles'
import { PostComponentProps } from './types'

export const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
  const postCreatedAt = new Date(post.created_at)
  return (
    <PostContainer>
      <Link to={`/post/${post.number}`}>
        <header>
          <strong>{post.title}</strong>
          <time
            title={format(
              postCreatedAt,
              "dd 'de' MMMM 'de' yyyy, 'às' H:mm 'horas'",
              {
                locale: ptBR,
              },
            )}
            dateTime={postCreatedAt.toISOString()}
          >
            {formatDistanceToNow(postCreatedAt, {
              locale: ptBR,
              addSuffix: true,
            })}
          </time>
        </header>
        <p>{post.body}</p>
      </Link>
    </PostContainer>
  )
}
