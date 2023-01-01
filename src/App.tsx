import { ThemeProvider } from 'styled-components'
import { DEFAULT_THEME } from './styles/theme/defaultTheme'
import { BrowserRouter } from 'react-router-dom'
import { RoutesPage } from './pages/RoutesPage'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DEFAULT_THEME}>
        <RoutesPage />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
