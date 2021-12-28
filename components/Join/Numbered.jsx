import { Box, Img, Heading, Text } from '@chakra-ui/react'

export function Numbered({ children, number }) {
    return (
        <Box mb="8" align="center">
            <Heading as='h3' display="inline" p={2} bg="blue.300" borderRadius="5px" fontSize="2xl" fontWeight="bolder" alignSelf="center" textAlign="center" color="white" mr="2">{number}</Heading>
            <Text display="inline" fontSize="xl" fontWeight="semibold" color="gray.500">{children}</Text>
        </Box>
    )
}