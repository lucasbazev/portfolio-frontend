import React from 'react'
import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react'
import { ArrowBackIcon, LinkIcon } from '@chakra-ui/icons'

export const ProvisionalPage = (props) => {
  const { route } = props

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Text mb={2}>This page is under construction... 🚧</Text>

      <Link
        href={route === '/contact' ? 'https://linkedin.com/in/lucasbazev' : '/'}
      >
        <Flex
          alignItems="center"
          cursor="pointer"
          _hover={{ color: 'primary', fontWeight: 600 }}
        >
          {route === '/contact' ? <LinkIcon /> : <ArrowBackIcon />}
          <Text ml={2}>
            {route === '/contact'
              ? 'You can get in touch by accessing my LinkedIn profile'
              : 'Back to home'}
          </Text>
        </Flex>
      </Link>
    </Flex>
  )
}
