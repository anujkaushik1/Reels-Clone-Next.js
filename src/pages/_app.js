import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    brand: {
      900: '#fff',
      800: '#f2f2f2',
      700: '#d9d9d9',
    },
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>

  )
}
