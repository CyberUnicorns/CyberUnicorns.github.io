import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { Card } from './Card'

// these lists keep the new recruiting copy tidy inside the old layout.
const whatWeDo = [
  'weekly optional meetings',
  'learn cyber with hands-on projects',
  'build connections in industry',
  'train for and compete in CTFs like picoCTF (and win)',
]

const pathways = [
  {
    title: 'Nonprofit',
    text: 'Community cyber education, secure web help for mission-driven groups, and outreach projects that do real public good.',
  },
  {
    title: 'Public Sector',
    text: 'A direct opportunity to work with the National Coast Guard and other partner organizations that want student initiative.',
  },
  {
    title: 'Industry',
    text: 'Connections with security professionals, companies, and practical team experience that helps members build real momentum.',
  },
]

const competitionFlow = [
  'picoCTF categories like web, crypto, reversing, forensics, binary exploitation, and general skills',
  'Other team competitions and open events as members level up',
  'Real tooling with Linux, Python, Wireshark, netcat, and challenge workflows',
]

// this section keeps the old clean boxes but replaces the outdated content.
export function Benefits() {
  return (
    <Box bg="gray.100" p={4} color="gray.800" pt="6">
      <Container maxW="container.xl">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          color="blue.700"
          fontWeight="bolder"
          textAlign="center"
          mb="6"
        >
          What We Do
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box maxW="700px" mx="auto" p={5} boxShadow="lg" bg="white" rounded="lg">
            <Text fontSize="lg" fontWeight="bold" color="blue.700">
              Hi @everyone! want to learn cybersecurity AND actually use it?
            </Text>
            <Text mt={4}>
              CyberUnicorns is NCSSM Durham&apos;s official cybersecurity club, and we&apos;re
              recruiting members for this year.
            </Text>

            <Text fontWeight="bold" mt={4}>
              What we do
            </Text>

            <UnorderedList spacing={2} mt={2}>
              {whatWeDo.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>

            <Text fontWeight="bold" mt={4}>
              Looking for leadership!
            </Text>
            <Text mt={2}>
              If you show initiative, you&apos;re welcome even if you&apos;re new to
              cybersecurity.
            </Text>
          </Box>

          <Box maxW="700px" mx="auto" p={5} boxShadow="lg" bg="white" rounded="lg">
            <Heading as="h2" size="lg" color="blue.700">
              Big Opportunity
            </Heading>
            <Text mt={4}>
              We have a direct opportunity to work with the National Coast Guard and other
              organizations and companies, so members can do more than just study challenge
              writeups.
            </Text>

            <Text fontWeight="bold" mt={4}>
              Competition focus
            </Text>
            <UnorderedList spacing={2} mt={2}>
              {competitionFlow.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>

            <Text fontWeight="bold" mt={4}>
              Join pathway
            </Text>
            <Text mt={2}>
              Join the Discord, check the interest form, and come to the first meeting or
              interest session once details are posted.
            </Text>
          </Box>
        </SimpleGrid>

        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          color="blue.700"
          fontWeight="bolder"
          textAlign="center"
          mt="10"
        >
          Club Pathways
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="30px" mt="4">
          {pathways.map((pathway) => (
            <Box key={pathway.title} bg="white" p={5} boxShadow="lg" rounded="lg">
              <Text fontSize="2xl" fontWeight="bold" color="blue.700" align="center">
                {pathway.title}
              </Text>
              <Text lineHeight="1.6rem" color="gray.700" mt={4}>
                {pathway.text}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          color="blue.700"
          fontWeight="bolder"
          textAlign="center"
          mt="10"
        >
          Competition Layout
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="30px" mt="4">
          <Card title="picoCTF" logo="/pico.png">
            Developed by Carnegie Mellon, picoCTF is the main competition we use to train new
            members across web, crypto, reversing, forensics, binary exploitation, and general
            skills.
          </Card>

          <Box bg="white" p={5} boxShadow="lg" rounded="lg">
            <Text fontSize="2xl" fontWeight="bold" align="center" color="blue.700">
              What members build toward
            </Text>
            <UnorderedList spacing={3} mt={4} color="gray.700">
              <ListItem>Hands-on solves, writeups, and challenge workflows</ListItem>
              <ListItem>Team practice for broader competitions after picoCTF</ListItem>
              <ListItem>Technical confidence with modern cyber tools and concepts</ListItem>
              <ListItem>
                More club material on the{' '}
                <Link href="https://github.com/CyberUnicorns/Curriculum" color="blue.400" isExternal>
                  CyberUnicorns curriculum
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
