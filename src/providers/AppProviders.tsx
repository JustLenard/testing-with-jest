import { CssBaseline } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

interface Props {
  children: React.ReactNode
}

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
})

const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppProviders
