import { GiUnicorn } from "react-icons/gi";
import { Box, Text, Icon } from '@chakra-ui/react'
export function UnicornBullet({ text }) {
    return (
        <Box d="flex" justifyContent="center" alignItems="center" flexDirection="row" my={2}>
            <Icon as={GiUnicorn} color="blue.300" fontSize="4xl" display="inline" />
            <Text d="inline" fontWeight="semibold" color="gray.700" fontSize="lg">{text}</Text>
        </Box>
    )
}