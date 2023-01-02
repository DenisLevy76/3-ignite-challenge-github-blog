import styled, { css } from 'styled-components'

export const PostContainer = styled.article`
  ${({ theme }) => css`
    padding: 2rem;
    border-radius: 12px;
    background: ${theme.colors.base.post};

    a {
      color: ${theme.colors.base.text};
      font-weight: 400;
      ${theme.type.text.m}

      > header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.25rem;
        height: 4rem;

        > strong {
          color: ${theme.colors.base.title};
          ${theme.type.title.m}

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        > time {
          white-space: nowrap;
          color: ${theme.colors.base.span};
          ${theme.type.text.s}
        }
      }

      > p {
        height: 103px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        word-break: break-all;

        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
      }
    }
  `}
`
