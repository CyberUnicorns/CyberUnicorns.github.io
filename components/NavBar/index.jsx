import { Box, Img, Heading, Link } from '@chakra-ui/react'

export function NavBar() {
    return (
        <Link href="/" _hover={{}}>
            <Box bg='gray.700' w='100%' p={4} color='white' d="flex" justifyContent="center">

                <Img src="/logo.png" maxW="60px"></Img>
                <Box alignSelf="center">
                    <Heading as='h1' size="lg" d="inline">Cyber </Heading>
                    <Heading as='h1' size="lg" d="inline" color="blue.300" fontWeight="bolder">Unicorns</Heading>
                </Box>

            </Box>
        </Link>
    )
}