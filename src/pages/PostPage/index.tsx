import { PostPageContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import { useParams } from 'react-router-dom'
import { ContainerComponent } from '../../components/ContainerComponent'
import { PostInfoComponent } from '../../components/PostInfoComponent'
import { useGetIssue } from '../../hooks/useGetIssue'

export const PostPage: React.FC = () => {
  const { number } = useParams()

  const post = useGetIssue({
    issueNumber: number || '',
    owner: 'rocketseat-education',
    repo: 'reactjs-github-blog-challenge',
  })

  return (
    <PostPageContainer>
      {post && (
        <ContainerComponent style={{ maxWidth: 800 }}>
          <PostInfoComponent post={post} />
          <article className="post__body">
            <ReactMarkdown remarkPlugins={[remarkGfm, rehypeHighlight]}>
              {post.body}
            </ReactMarkdown>
          </article>
        </ContainerComponent>
      )}
    </PostPageContainer>
  )
}
