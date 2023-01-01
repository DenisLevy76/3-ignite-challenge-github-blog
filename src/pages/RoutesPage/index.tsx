import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { LayoutPage } from '../LayoutPage'

export const RoutesPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
