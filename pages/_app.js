import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// this keeps the app close to the original site setup.
function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
