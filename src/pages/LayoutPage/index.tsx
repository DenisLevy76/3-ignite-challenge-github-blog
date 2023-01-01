import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../components/HeaderComponent'

export const LayoutPage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}
