import { Box, Img, Heading, Container, Grid, GridItem } from '@chakra-ui/react'
import TypeIt from "typeit-react";

export function Landing() {
    return (
        <Box bgImage="url('/cover.jpg')" bgSize="cover" bgPosition="center"
            bgRepeat="no-repeat" w='100%' h="80%" p={4} color='gray.800' >
            <Container maxW="container.xl">
                <Grid templateColumns='repeat(2, 1fr)' align="center">
                    <GridItem colSpan={1} my="auto">
                        <TypeIt
                            options={{
                                cursor: false,
                                speed: 75,
                                afterComplete: async () => {
                                    // Will fire after the entire instance has completed typing.
                                    // NOTE: If "loop" is enabled, this will never fire.
                                    console.log('done');
                                    // document.getElementById("wait").classList.add("visible");
                                },
                            }}>
                            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} color="gray.300">Welcome to the </Heading>
                            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} color="blue.200">CyberUnicorns</Heading>
                        </TypeIt>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Img src="/logo.png" maxW="30vw"></Img>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}