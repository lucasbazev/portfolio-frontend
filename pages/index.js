import Head from 'next/head'
import Link from 'next/link'
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
        padding={[2, 0]}
        width="100vw"
        height={['80vh', '100vh']}
        textAlign="center"
      >
        <Text fontSize={32} fontWeight={900} color="#000201" mb={8}>
          Lucas Azevedo - Web and Mobile developer
        </Text>

        <Text>This website is under construction... 🚧</Text>

        <Link href="https://linkedin.com/in/lucasbazev">
          <Text cursor="pointer" _hover={{ color: '#2A88FF', fontWeight: 600 }}>
            You can get in touch by accessing my LinkedIn profile
          </Text>
        </Link>
      </Flex>
    </>
  )
}
