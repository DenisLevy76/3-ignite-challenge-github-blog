import styled, { css } from 'styled-components'

export const PostInfoContainer = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.base.profile};
    border-radius: 12px;
    padding: 2rem 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }

    > strong {
      color: ${theme.colors.base.title};
      ${theme.type.title.l};
    }

    > footer {
      display: flex;
      gap: 2rem;

      > p {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${theme.colors.base.span};

        > svg {
          color: ${theme.colors.base.label};
        }
      }
    }
  `}
`
