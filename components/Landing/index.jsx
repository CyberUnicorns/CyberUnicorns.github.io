import { Box, Img, Heading, Container, Grid, GridItem } from '@chakra-ui/react'

export function Landing() {
    return (
        <Box bgImage="url('/cover.jpg')" bgSize="cover" bgPosition="center"
            bgRepeat="no-repeat" w='100%' h="80%" p={4} color='gray.800' >
            <Container maxW="container.xl">
                <Grid templateColumns='repeat(2, 1fr)' align="center">
                    <GridItem colSpan={1} my="auto">
                        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }} color="gray.300">Welcome to the </Heading>
                        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }} color="white" d="inline">Cyber</Heading>
                        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }} color="blue.200" d="inline">Unicorns</Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Img src="/logo.png" maxW="30vw"></Img>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}