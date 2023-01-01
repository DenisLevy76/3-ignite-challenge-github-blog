import { ContainerComponent } from '../../components/ContainerComponent'
import { InputComponent } from '../../components/InputComponent'
import { ProfileComponent } from '../../components/ProfileComponent'
import { HomePageContainer } from './styles'

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <ContainerComponent as="section">
        <ProfileComponent />
        <InputComponent type="text" placeholder="Buscar conteúdo" />
      </ContainerComponent>
    </HomePageContainer>
  )
}
