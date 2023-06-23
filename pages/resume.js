import { Box, Text, Flex } from '@chakra-ui/react'
import { ResumeItemCard } from 'components/molecules'
import { env } from 'next.config'
import { useState } from 'react'
import { formatDate, formatExperienceText, formatTypeName } from 'utils/format'

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
  const [selectedOption, setSelectedOption] = useState({
    item: data?.contracts_freelancing?.[0],
    type: 'contracts_freelancing',
  })

  console.log({ selectedOption, data })

  return (
    <Flex align="center" justify="center" width="100%" height="100%">
      <Flex align="center" width="100%" gap={8}>
        <Box width="40%">
          {Object.keys(data).map((type) =>
            type !== 'mentorship' ? (
              data[type]?.map((item) => (
                <Box
                  key={item?.id}
                  padding={4}
                  width="100%"
                  bgColor={
                    item.id === selectedOption?.item?.id
                      ? 'primaryLight'
                      : 'transparent'
                  }
                  borderRadius={8}
                  transition="0.5s"
                  cursor="pointer"
                  onClick={() => setSelectedOption({ item, type })}
                >
                  <Text fontSize={16} fontWeight={700}>
                    {item.company}
                  </Text>
                  <Text fontSize={14} color="lightText">
                    {item.position}
                  </Text>
                </Box>
              ))
            ) : (
              <Box
                key={type}
                padding={4}
                width="100%"
                bgColor={
                  selectedOption?.item === 'mentorship'
                    ? 'primaryLight'
                    : 'transparent'
                }
                borderRadius={8}
                transition="0.5s"
                cursor="pointer"
                onClick={() =>
                  setSelectedOption({ item: 'mentorship', type: 'mentorship' })
                }
              >
                <Text fontSize={16} fontWeight={700}>
                  Mentorship
                </Text>
              </Box>
            )
          )}
        </Box>

        <Box width="40%">
          <Box mb={4}>
            {selectedOption?.item === 'mentorship' ? (
              <Text color="primary" fontWeight={600}>
                Mentorship
              </Text>
            ) : (
              <>
                <Text color="primary" fontWeight={600}>
                  {`${selectedOption?.item?.position} at ${selectedOption?.item?.company}`}
                </Text>

                <Text color="lightText" fontSize={14}>
                  {formatExperienceText(selectedOption?.item)}
                </Text>

                <Text color="black" fontSize={14} fontWeight={600}>
                  {formatTypeName(selectedOption?.type)}
                </Text>
              </>
            )}
          </Box>

          <Text>
            {selectedOption?.item?.job_description ||
              data[selectedOption?.item]}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ResumePage
