import Head from 'next/head'
import { Flex, Text } from '@chakra-ui/react'

export default function Home() {
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

      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        width="100%"
        height="100%"
        textAlign="center"
      >
        <Text fontSize={32} fontWeight={900} mb={8}>
          Lucas Azevedo - Web and Mobile developer
        </Text>
      </Flex>
    </>
  )
}
