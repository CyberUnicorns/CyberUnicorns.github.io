import { Box, Img, Text } from '@chakra-ui/react'

export function Card({ title = "", logo = "", children = "" }) {
    return (
        <Box bg='white' p={5} color='gray.800' boxShadow='lg' rounded={true} borderRadius="5px" _hover={{ bg: "gray.200" }}>
            <Text fontSize="2xl" fontWeight="bold" align="center" color="blue.700">{title}</Text>
            <Img src={logo} maxH="100px" alt="logo" mx="auto" />
            <Text lineHeight="1.5rem" color="gray.700" >{children}</Text>
        </Box>
    )
}