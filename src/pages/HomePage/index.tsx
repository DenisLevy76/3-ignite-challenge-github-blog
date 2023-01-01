import { ContainerComponent } from '../../components/ContainerComponent'
import { InputComponent } from '../../components/InputComponent'
import { ProfileComponent } from '../../components/ProfileComponent'
import { HomePageContainer, SearchForm } from './styles'

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <ContainerComponent as="section">
        <ProfileComponent />
        <SearchForm>
          <div>
            <strong>Publicações</strong>
            <p>6 publicações</p>
          </div>
          <InputComponent type="text" placeholder="Buscar conteúdo" />
        </SearchForm>
      </ContainerComponent>
    </HomePageContainer>
  )
}
