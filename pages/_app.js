import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// this theme swaps out the default font stack and gives the page calmer colors.
const theme = extendTheme({
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Space Grotesk', sans-serif",
  },
  colors: {
    coal: {
      900: '#18120e',
      950: '#0c0a08',
    },
    sand: {
      50: '#f3ede3',
      300: '#c4b6a3',
      400: '#a89379',
    },
    accent: {
      400: '#e0b376',
      500: '#d6a45d',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'coal.950',
        color: 'sand.50',
      },
    },
  },
})

function App({ Component, pageProps }) {
  // this keeps the whole app on the same theme without extra wrappers in each page.
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
