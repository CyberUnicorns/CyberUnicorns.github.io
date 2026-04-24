import { Box, Img, Heading, Container, Grid, GridItem, Text, Button, Link, Stack } from '@chakra-ui/react'

// these are the confirmed join links we have right now.
const joinLinks = {
  discord: 'https://discord.gg/R67SaG78Ad',
  interestForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSezdZrJK939zlVGsvFhBark3VsP5kXc4KrLT-2yJc2T9PveQg/viewform?usp=sharing&ouid=118136963325335320825',
}

// this keeps the old hero but swaps in the new recruiting message.
export function Landing() {
  return (
    <Box
      bgImage="url('/cover.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      p={4}
      color="gray.800"
      mt="0"
    >
      <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} align="center" gap={8}>
          <GridItem colSpan={1} my="auto">
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }} color="gray.300">
              Join the
            </Heading>
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }} color="white" d="inline">
              Cyber
            </Heading>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              color="blue.200"
              d="inline"
            >
              corns
            </Heading>

            <Text fontSize={{ base: 'lg', md: '2xl' }} color="white" mt={5} maxW="540px">
              NCSSM Durham&apos;s official cybersecurity club for students who want to learn
              cyber and actually use it.
            </Text>

            <Text color="gray.200" mt={4} maxW="560px">
              Weekly optional meetings, hands-on projects, industry connections, and training
              for competitions like picoCTF.
            </Text>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mt={6}>
              <Button as="a" href={joinLinks.discord} colorScheme="blue" isExternal>
                join the discord
              </Button>
              <Button
                as="a"
                href={joinLinks.interestForm}
                variant="outline"
                color="white"
                borderColor="whiteAlpha.700"
                _hover={{ bg: 'whiteAlpha.200' }}
                isExternal
              >
                interest form
              </Button>
            </Stack>

            <Text color="gray.300" mt={4}>
              Details for the first meeting and interest session will be posted on the website.
            </Text>
          </GridItem>

          <GridItem colSpan={1}>
            <Link href="/" _hover={{}}>
              <Img src="/logo.png" maxW={{ base: '260px', md: '360px' }} mx="auto" alt="Cybercorns unicorn logo" />
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
