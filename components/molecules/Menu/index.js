import React from 'react'
import Link from 'next/link'
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  SunIcon,
  MoonIcon,
  HamburgerIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons'

import { Logo } from 'components/atoms'
import { menuLinks } from './settings'

export const Menu = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { route } = props

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  if (!isDesktop)
    return (
      <>
        <HamburgerIcon margin={6} boxSize={6} onClick={onOpen} />

        <Drawer
          initialFocusRef={null}
          placement="left"
          isOpen={isOpen}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={78}
            >
              <Logo />
              <ArrowBackIcon boxSize={6} onClick={onClose} />
            </DrawerHeader>

            <DrawerBody>
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
            </DrawerBody>

            <DrawerFooter pos="relative">
              <Flex
                alignItems="center"
                px={6}
                py={2}
                position="absolute"
                left={0}
                bottom={2}
                cursor="pointer"
                onClick={toggleColorMode}
              >
                {colorMode === 'light' ? (
                  <MoonIcon mr={2} />
                ) : (
                  <SunIcon mr={2} />
                )}

                <Text fontSize={14} fontWeight={500}>
                  Switch to {colorMode === 'light' ? 'dark' : 'ligth'}
                </Text>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )

  return (
    <Box padding={6} width={450} height="100%" position="relative">
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
        bottom={2}
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
