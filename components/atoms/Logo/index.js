import React from 'react'
import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'

export const Logo = (props) => (
  <Flex alignItems="center" {...props}>
    <Image
      src="/img/logo.png"
      alt="Lucas Azevedo"
      width={32}
      height={32}
      objectFit="fill"
    />
    <Text fontSize={18} fontWeight={700} ml={2}>
      Lucas Azevedo
    </Text>
  </Flex>
)
