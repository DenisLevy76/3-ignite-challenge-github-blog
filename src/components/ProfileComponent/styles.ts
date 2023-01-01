import styled, { css } from 'styled-components'

export const ProfileContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.base.profile};
    border-radius: 10px;
    padding: 2rem 2.5rem;
    gap: 2rem;

    > img {
      width: 100%;
      max-width: 9.25rem;
      object-fit: cover;
      border-radius: 8px;
    }

    > main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    > main > header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h2 {
        color: ${theme.colors.base.title};
        ${theme.type.title.l}
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    > main > footer {
      display: flex;
      gap: 2rem;

      > p {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        > svg {
          color: ${theme.colors.base.label};
        }
      }
    }
  `}
`
