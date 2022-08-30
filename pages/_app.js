import { useRouter } from 'next/router'
import Head from 'next/head'
import { Flex, ChakraProvider } from '@chakra-ui/react'

import { Menu } from 'components/molecules'
import theme from 'theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { route } = useRouter()

  return (
    <>
      <Head>
        <title>Lucas Azevedo</title>
        <meta
          name="description"
          content="Lucas Azevedo's personal website/portfolio - Web and Mobile Developer"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="../site.webmanifest" />
      </Head>

      <ChakraProvider theme={theme}>
        <Flex width="100vw" height="100vh">
          <Menu route={route} />
          <Component route={route} {...pageProps} />
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default MyApp
