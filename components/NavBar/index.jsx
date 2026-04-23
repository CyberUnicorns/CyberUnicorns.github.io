import { Box, Img, Heading, Link } from '@chakra-ui/react'

// this keeps the simple original header and unicorn mark.
export function NavBar() {
  return (
    <Box bg="gray.700" color="white" pt="1" position="sticky" top="0" p={1} zIndex="100">
      <Box d="flex" justifyContent="center" alignItems="center">
        <Link href="/" _hover={{ opacity: 0.9 }}>
          <Img src="/logo.png" maxW="60px" alt="Cybercorns logo" />
        </Link>

        <Box alignSelf="center" ml="2">
          <Heading as="h1" size="lg" d="inline">
            Cyber
          </Heading>
          <Heading as="h1" size="lg" d="inline" color="blue.300" fontWeight="bolder">
            corns
          </Heading>
        </Box>
      </Box>
    </Box>
  )
}
