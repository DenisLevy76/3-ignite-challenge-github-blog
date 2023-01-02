import styled, { css } from 'styled-components'

export const ProfileContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.base.profile};
    border-radius: 12px;
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
      width: 100%;
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
      gap: 1rem;

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
    @media (max-width: 650px) {
      padding: 0.5rem 1rem;

      flex-direction: column;
      align-items: center;

      > main > header {
        flex-direction: column;
        a {
          font-size: 1.25rem;
          margin: 1rem 0;
        }
      }
    }

    @media (max-width: 400px) {
      > main > footer {
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 2rem;
      }
    }
  `}
`
