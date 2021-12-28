import { Box, Heading, Container, SimpleGrid } from '@chakra-ui/react'
import Data from "./data.json"
import { Bullet } from "./Bullet"

export function Topics() {
    const colors = {
        "Web": "blue.300",
        "Cryptography": "green.300",
        "Linux": "yellow.300",
        "Tools": "red.300",
    }
    let uniqueCategories = [...new Set(Data.map(item => item.category))]
    return (
        <Box bg='gray.100' p={5} color='gray.800'>
            <Container maxW="container.xl">
                <Heading as='h1' fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="gray.700" fontWeight="bolder" textAlign="center">Topics We Cover</Heading>


                {uniqueCategories.map((category, index) => {
                    return (
                        <Box key={index}>
                            <Heading as='h3' fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="gray.700" fontWeight="bolder" textAlign="center" mt="8" mb="4">{category}</Heading>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                                {Data.filter(item => item.category === category).map((item, i) => {
                                    return (
                                        <Bullet key={item.name} color={colors[category]}>{item.name}</Bullet>
                                    )
                                })}
                            </SimpleGrid>
                        </Box>
                    )

                })}

            </Container >
        </Box >
    )
}