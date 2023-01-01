import styled from 'styled-components'

export const HomePageContainer = styled.main`
  margin-top: -5.5rem;
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
      ${({ theme }) => theme.type.title.m}
    }

    > p {
      color: ${({ theme }) => theme.colors.base.span};
    }
  }
`
