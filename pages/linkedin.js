/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Flex, Text } from '@chakra-ui/react'

export default function LinkedinPage() {
  const router = useRouter()

  useEffect(() => {
    router.push('https://www.linkedin.com/in/lucasbazev')
  }, [])

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="70vh"
    >
      <Text>Redirecting to LinkedIn...</Text>
    </Flex>
  )
}
