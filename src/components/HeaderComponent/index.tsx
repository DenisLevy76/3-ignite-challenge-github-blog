import { ContainerComponent } from '../ContainerComponent'
import { HeaderContainer } from './styles'

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <ContainerComponent>
        <img src="/icons/logo.svg" alt="" />
      </ContainerComponent>
    </HeaderContainer>
  )
}
