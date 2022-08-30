import { Avatar, Flex, Box, Text, useTheme } from '@chakra-ui/react'

export default function Home() {
  const theme = useTheme()

  return (
    <Flex flexDirection="column" px={2} pt={32} width="100%" height="100%">
      <Flex alignItems="center" mb={8}>
        <Avatar
          showBorder
          borderWidth={3}
          borderColor="primary"
          size="lg"
          name="Lucas Azevedo"
          src="/img/avatarImg.jpeg"
        />
        <Text color="primary" fontSize={28} fontWeight={900} ml={4}>
          Lucas Azevedo
        </Text>
      </Flex>

      <Box width="75%">
        <Text fontSize={18} mb={6}>
          Software developer based in Brasília, passionate about software
          development.{' '}
        </Text>

        <Text fontSize={18} mb={6}>
          Currently working as Web and Mobile Developer at SevenApps -{' '}
          <span style={{ color: theme.colors.primary, display: 'block' }}>
            mostly using React, Next.js and React Native.
          </span>
        </Text>

        <Text fontSize={18}>I'm also an admirer of coffee, tech and cars.</Text>
      </Box>
    </Flex>
  )
}
