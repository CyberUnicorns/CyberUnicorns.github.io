import { Box, Img, Heading, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export function NavBar() {
    return (

        // <Box  w='100%' p={4} color='white' d="flex" justifyContent="center">

        <Box bg='gray.700' color="white" pt="1" position="sticky" top="0" p={1} zIndex="100" >

            <Box d="flex" justifyContent="center">
                <motion.a href="/" whileHover={{ scale: 1.3 }}>
                    <Img src="/logo.png" maxW="60px" />
                </motion.a>

                <Box alignSelf="center">
                    <Heading as='h1' size="lg" d="inline">Cyber</Heading>
                    <Heading as='h1' size="lg" d="inline" color="blue.300" fontWeight="bolder">Unicorns</Heading>
                </Box>

            </Box>

        </Box >

    )
}