import { Flex, ChakraProvider } from '@chakra-ui/react'

import { Menu } from 'components/molecules'
import theme from 'theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex width="100vw" height="100vh">
        <Menu />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
