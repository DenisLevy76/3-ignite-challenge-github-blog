import styled from 'styled-components'

export const HomePageContainer = styled.main`
  margin-top: -5.5rem;

  .posts__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`
export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > strong {
      color: ${({ theme }) => theme.colors.base.subtitle};
      ${({ theme }) => theme.type.title.m}
    }

    > p {
      color: ${({ theme }) => theme.colors.base.span};
    }
  }
`
