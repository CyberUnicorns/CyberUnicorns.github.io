import { Box, Text } from '@chakra-ui/react'

export function Footer() {
    return (
        <Box bg="gray.100">
            <hr />
            <Box py={8}>
                <Text align="center" fontStyle="italic" color="gray.500">&copy; 2021 CyberUnicorns</Text>
            </Box>
        </Box>
    )
}