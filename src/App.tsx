import { ThemeProvider } from 'styled-components'
import './App.css'
import { DEFAULT_THEME } from './styles/theme/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <div className="App"></div>
    </ThemeProvider>
  )
}

export default App
