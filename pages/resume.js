import { Box, Text } from '@chakra-ui/react'
import { ResumeItemCard } from 'components/molecules'
import { env } from 'next.config'

export async function getServerSideProps() {
  const apiData = await fetch('http://localhost:3001/resume')
  const data = await apiData.json()

  return {
    props: {
      data,
    },
  }
}

const ResumePage = ({ data }) => {
  console.log({ data })

  const formatTypeName = (type) => {
    switch (type) {
      case 'full_time':
        return 'Full-time'

      case 'contracts_freelancing':
        return 'Contracts | Freelance work'

      case 'mentorship':
        return 'Mentorship'
    }
  }

  return (
    <Box>
      {!!data ? (
        Object.keys(data).map((type) => (
          <Box my={8} key={type}>
            <Text fontSize={24} fontWeight={700} my={2}>
              {formatTypeName(type)}
            </Text>

            {type !== 'mentorship' ? (
              data[type].map((item) => (
                <ResumeItemCard
                  key={`experience_${item?.position}`}
                  item={item}
                  px={4}
                  my={4}
                />
              ))
            ) : (
              <Text px={4} maxW={[320, 640, 960]}>
                {data[type]}
              </Text>
            )}
          </Box>
        ))
      ) : (
        <Text p={12}>Sorry... we couldnt get the data</Text>
      )}
    </Box>
  )
}

export default ResumePage
