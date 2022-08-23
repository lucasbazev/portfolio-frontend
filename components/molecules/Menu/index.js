import React from 'react'
import Link from 'next/link'
import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import { Logo } from 'components/atoms'
import { menuLinks } from './settings'

export const Menu = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { route } = props

  return (
    <Box padding={4} width={300} height="100%" position="relative">
      <Logo mb={78} />

      {menuLinks.map((item) => (
        <Box
          key={`menuItem_${item.name}`}
          mb={8}
          width="fit-content"
          cursor="pointer"
        >
          <Link href={item.path}>
            <Text
              fontSize={20}
              fontWeight={500}
              opacity={route === item.path ? 1 : 0.5}
              transitionDuration="0.3s"
              _hover={{ opacity: 1 }}
            >
              {item.name}
            </Text>
          </Link>
        </Box>
      ))}

      <Flex
        alignItems="center"
        paddingY={2}
        position="absolute"
        bottom={0}
        cursor="pointer"
        onClick={toggleColorMode}
      >
        {colorMode === 'light' ? <MoonIcon mr={2} /> : <SunIcon mr={2} />}

        <Text fontSize={14} fontWeight={500}>
          Switch to {colorMode === 'light' ? 'dark' : 'ligth'}
        </Text>
      </Flex>
    </Box>
  )
}