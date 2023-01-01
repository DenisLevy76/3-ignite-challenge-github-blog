import 'styled-components'
import { DEFAULT_THEME } from '../styles/theme/defaultTheme'

type DefaultThemeType = typeof DEFAULT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType { }
}
