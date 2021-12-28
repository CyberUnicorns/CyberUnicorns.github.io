import { CheckIcon } from '@chakra-ui/icons'
import { Text, Box } from '@chakra-ui/react'

export function Bullet({ children, color }) {
    return (
        <Box boxShadow='lg' bg="white" p={2} borderRadius="5px" d="flex" _hover={{ bg: "gray.100" }
        }>
            <CheckIcon mr="2" color={color} alignSelf="center" fontSize="2xl" />
            <Text display="inline" alignSelf="center">{children}</Text>
        </Box >
    )
}