import { Box, Heading, Container, SimpleGrid, Text, Link } from '@chakra-ui/react'
import { Numbered } from './Numbered'
import { UnicornBullet } from './UnicornBullet'

// this keeps the join section close to the original split layout.
export function Join() {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl" pt="4">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          color="blue.700"
          fontWeight="bolder"
          textAlign="center"
        >
          How to Join
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          <Box
            bg="white"
            px="4"
            py="6"
            boxShadow="xl"
            rounded="md"
            maxW="700px"
            mx="auto"
            mt="4"
            d="flex"
            alignItems="center"
          >
            <Box maxW="520px" mx="auto">
              <UnicornBullet text="All experience levels welcome" />
              <UnicornBullet text="Weekly optional meetings and hands-on projects" />
              <UnicornBullet text="Build connections in industry" />
              <UnicornBullet text="Leadership opportunities for members who show initiative" />
              <UnicornBullet text="Train for and compete in CTFs like picoCTF" />
            </Box>
          </Box>

          <Box
            align="center"
            bg="white"
            p={8}
            boxShadow="xl"
            rounded="md"
            maxW="560px"
            mx="auto"
            mt="4"
          >
            <Numbered number="1">
              Join the{' '}
              <Link href="https://discord.gg/R67SaG78Ad" color="blue.300" isExternal>
                Discord
              </Link>
            </Numbered>

            <Numbered number="2">
              Fill out the{' '}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSezdZrJK939zlVGsvFhBark3VsP5kXc4KrLT-2yJc2T9PveQg/viewform?usp=sharing&ouid=118136963325335320825"
                color="blue.300"
                isExternal
              >
                interest form
              </Link>{' '}
              and follow the Instagram
            </Numbered>

            <Numbered number="3">Come to the first meeting or interest session</Numbered>

            <Text fontWeight="bold" fontSize="2xl" color="orange.400" mt={4}>
              Details will be posted on the website
            </Text>
            <Text fontWeight="bold" fontSize="xl" color="blue.700" mt={2}>
              Discord will have updates too
            </Text>
            <Text color="gray.500" mt={4}>
              If you want leadership, say so in the form or introduce yourself in Discord.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
