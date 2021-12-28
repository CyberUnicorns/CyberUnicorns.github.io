import { Box, Heading, Container, SimpleGrid, Text, Link } from '@chakra-ui/react'
import { Numbered } from './Numbered'

export function Join() {
    return (
        <Box bg="gray.100">
            <Container maxW="container.xl" pt="4">
                <Heading as='h1' fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="gray.700" fontWeight="bolder" textAlign="center">Join Us</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} mt="5">
                    <Box align="center">
                        <Text fontWeight="bold" fontSize="3xl" color="orange.400">Tuesdays @ 99:99 PM</Text>
                        <Text fontWeight="bold" fontSize="3xl" color="blue.700">Room: Watts 111</Text>
                    </Box>

                    <Box>
                        <Numbered number="1">Fill out the <Link href="GOOGLE FORM LINK" color="blue.300" isExternal>member information form</Link></Numbered>
                        <Numbered number="2">Come to one of our meetings!</Numbered>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}