import { Box, Heading, Container, SimpleGrid } from '@chakra-ui/react'
import { Card } from './Card'

export function Benefits() {
    return (
        <Box bg='gray.100' p={4} color='gray.800' pt="4">
            <Container maxW="container.xl">
                <Heading as='h1' fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="gray.700" fontWeight="bolder" textAlign="center">Our Activities</Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="30px" mt="4">
                    <Card title="Learn Cybersecurity" logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum nulla non quia deleniti accusamus nihil, totam delectus exercitationem minima velit nobis dolorem consectetur nisi. Quod repellendus nobis aperiam dolorem deleniti voluptatibus excepturi expedita et, dignissimos id est beatae nihil.</Card>
                    <Card title="CyberStart America" logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum nulla non quia deleniti accusamus nihil, totam delectus exercitationem minima velit nobis dolorem consectetur nisi. Quod repellendus nobis aperiam dolorem deleniti voluptatibus excepturi expedita et, dignissimos id est beatae nihil.</Card>
                    <Card title="picoCTF" logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum nulla non quia deleniti accusamus nihil, totam delectus exercitationem minima velit nobis dolorem consectetur nisi. Quod repellendus nobis aperiam dolorem deleniti voluptatibus excepturi expedita et, dignissimos id est beatae nihil.</Card>
                    <Card title="Scholarhips" logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum nulla non quia deleniti accusamus nihil, totam delectus exercitationem minima velit nobis dolorem consectetur nisi. Quod repellendus nobis aperiam dolorem deleniti voluptatibus excepturi expedita et, dignissimos id est beatae nihil.</Card>
                </SimpleGrid>

            </Container>
        </Box >
    )
}