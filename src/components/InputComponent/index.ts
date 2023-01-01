import styled from 'styled-components'

export const InputComponent = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.border};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.label};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.base.label};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.base.label};
  }
`
