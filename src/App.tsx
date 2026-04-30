import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme='dark'>
      <HelmetProvider>
        <Helmet titleTemplate='%s | pizza.shop' />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
