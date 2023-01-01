import { ContainerComponent } from '../../components/ContainerComponent'
import { ProfileComponent } from '../../components/ProfileComponent'
import { HomePageContainer } from './styles'

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <ContainerComponent as="section">
        <ProfileComponent />
      </ContainerComponent>
    </HomePageContainer>
  )
}
