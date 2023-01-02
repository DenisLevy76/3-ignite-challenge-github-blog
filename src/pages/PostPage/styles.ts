import styled from 'styled-components'

export const PostPageContainer = styled.main`
  margin-top: -5.5rem;

  .post__body {
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  img {
    width: 100%;
    padding: 1rem 0;
  }

  a {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.base.title};
  }

  h1 {
    ${({ theme }) => theme.type.title.l}
    line-height: 400%;
  }
  h2 {
    ${({ theme }) => theme.type.title.l}
    border-bottom: 1px solid ${({ theme }) => theme.colors.base.border};
    margin: 1rem 0;
    padding: 0.5rem 0;
  }
  h3 {
    ${({ theme }) => theme.type.title.s}
    line-height: 300%;
  }

  ul {
    list-style: disc;
    padding: 0 1.5rem;
  }
`
