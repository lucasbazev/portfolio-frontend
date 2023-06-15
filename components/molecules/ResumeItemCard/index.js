import { Box, Text } from '@chakra-ui/react'

export const ResumeItemCard = ({ item, ...props }) => (
  <Box maxW={[320, 640, 960]} {...props}>
    <Box mb={2}>
      <Text fontWeight={700}>
        {item?.company} - {item?.position}
      </Text>

      <Text color="#757575" fontWeight={400}>
        {item?.duration}
      </Text>
    </Box>

    <Text>{item?.job_description}</Text>
  </Box>
)
