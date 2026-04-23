import Head from 'next/head'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

// these links are the only confirmed external paths in the repo and brief.
const joinLinks = {
  discord: 'https://discord.gg/R67SaG78Ad',
  interestForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSdbwMFp5wgEvTBW75CwoPy9aCblNMQQsjjVm6yzGxV9WfXbUg/viewform?usp=sf_link',
}

// this keeps the recruiting section close to the user's copy.
const whatWeDo = [
  'weekly optional meetings',
  'learn cyber with hands-on projects',
  'build connections in industry',
  'train for and compete in CTFs like picoCTF (and win)',
]

// these topic lanes stay close to picoctf while updating the material for 2026.
const topicGroups = [
  {
    title: 'web exploitation',
    items: [
      'hidden routes, auth bypass, and session flaws',
      'cookies, local storage, JWTs, and OAuth basics',
      'xss, sql injection, command injection, and SSRF',
      'API testing with JavaScript, PHP, and Python tooling',
    ],
  },
  {
    title: 'cryptography',
    items: [
      'encoding vs encryption and when each matters',
      'classical ciphers like caesar, rot, atbash, and substitution',
      'hashes, signatures, key exchange, and common crypto mistakes',
      'ascii, hex, base64, utf-8, qr codes, and stego workflows',
    ],
  },
  {
    title: 'reverse engineering',
    items: [
      'strings, symbols, and file format clues',
      'ghidra basics and decompiler reading',
      'android, python, and binary reversing patterns',
      'patching logic to understand challenge behavior',
    ],
  },
  {
    title: 'forensics and osint',
    items: [
      'pcaps, disk artifacts, and memory snapshots',
      'metadata, web archives, and traceable breadcrumbs',
      'log analysis, threat intel pivots, and timelines',
      'triaging evidence fast enough for team competition play',
    ],
  },
  {
    title: 'binary exploitation',
    items: [
      'stack and heap basics, memory layout, and calling conventions',
      'buffer overflows, format strings, and unsafe input handling',
      'pwntools, gdb, and scripting repeatable solves',
      'mitigations like nx, aslr, and how to reason around them',
    ],
  },
  {
    title: 'general skills',
    items: [
      'linux commands, bash scripting, ssh, netcat, and vim survival',
      'tcp, udp, ports, sockets, and packet flow intuition',
      'python automation for challenge tooling and scraping',
      'git, virtual machines, containers, and repeatable lab setup',
    ],
  },
  {
    title: 'cloud and identity',
    items: [
      'iam basics, role assumptions, and secret handling',
      'storage exposure, bucket policy mistakes, and token leaks',
      'federated login flows and privilege escalation paths',
      'how cloud thinking shows up in modern web and infra challenges',
    ],
  },
  {
    title: 'defense and detection',
    items: [
      'how attackers move once they land',
      'building simple detections from logs and packet traces',
      'investigating suspicious scripts, downloads, and alerts',
      'communicating findings clearly enough to hand off or escalate',
    ],
  },
]

// this keeps one featured card and turns the rest into a simple list.
const competitionTracks = [
  {
    name: 'picoCTF',
    timing: 'spring focus',
    summary:
      'our main recruiting and training competition, with categories that map cleanly to beginner and intermediate growth.',
  },
  {
    name: 'NCL',
    timing: 'fall and spring',
    summary:
      'team-based practice for timed challenge solving, reporting, and steady individual improvement.',
  },
  {
    name: 'US Cyber Games open events',
    timing: 'seasonal',
    summary:
      'good for players who want tougher problem sets and a faster national field.',
  },
  {
    name: 'CSAW and similar university CTFs',
    timing: 'throughout the year',
    summary:
      'where we stretch into harder reversing, web, pwn, and forensics material.',
  },
]

// these are framed as pathways so the page does not invent specific placement claims.
const pathways = [
  {
    title: 'nonprofit',
    items: [
      'community cyber education and outreach',
      'secure site reviews for mission-driven groups',
      'student-led awareness projects that do real public good',
    ],
  },
  {
    title: 'public sector',
    items: [
      'direct opportunity to work with the National Coast Guard',
      'public-interest cyber projects and partner organizations',
      'leadership chances for members who want responsibility early',
    ],
  },
  {
    title: 'industry',
    items: [
      'connections with security practitioners and companies',
      'resume-ready team experience through competitions and projects',
      'a clear ramp into analyst, engineering, and research paths',
    ],
  },
]

// keep sections visible in the static export instead of relying on js motion.
function RevealBlock({ children, delay = 0 }) {
  return <Box transition="opacity 160ms ease" transitionDelay={`${delay}s`}>{children}</Box>
}

// this groups each topic lane in a clean box instead of another dashboard card.
function TopicPanel({ topic }) {
  return (
    <Box
      h="full"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="coal.900"
      rounded="sm"
      p={{ base: 5, md: 6 }}
    >
      <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
        {topic.title}
      </Heading>
      <Stack spacing={3} color="sand.300">
        {topic.items.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </Stack>
    </Box>
  )
}

// these boxes answer the user's request for placement lanes.
function PathwayBox({ pathway }) {
  return (
    <Box
      h="full"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="coal.900"
      rounded="sm"
      p={{ base: 5, md: 6 }}
    >
      <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
        {pathway.title}
      </Heading>
      <Stack spacing={3} color="sand.300">
        {pathway.items.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </Stack>
    </Box>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Cybercorns | NCSSM Durham Cybersecurity Club</title>
        <meta
          name="description"
          content="Cybercorns is recruiting new members at NCSSM Durham for hands-on cybersecurity projects, competitions, and industry connections."
        />
      </Head>

      <Box as="main" bg="coal.950" color="sand.50">
        <Box
          as="section"
          position="relative"
          minH="100svh"
          overflow="hidden"
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
        >
          {/* this keeps the first screen image-led without adding fake panels. */}
          <Box
            position="absolute"
            inset="0"
            bgImage="url('/cover.jpg')"
            bgSize="cover"
            bgPosition="center"
            transform="scale(1.03)"
          />
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(120deg, rgba(12, 10, 8, 0.96) 0%, rgba(12, 10, 8, 0.82) 48%, rgba(12, 10, 8, 0.94) 100%)"
          />

          <Container
            maxW="7xl"
            position="relative"
            minH="100svh"
            display="flex"
            flexDirection="column"
            px={{ base: 6, md: 8 }}
          >
            <Flex
              as="header"
              align="center"
              justify="space-between"
              py={{ base: 6, md: 8 }}
              gap={6}
            >
              <Box>
                <Text color="sand.300">NCSSM Durham cybersecurity club</Text>
                <Heading as="div" fontSize={{ base: '2xl', md: '3xl' }}>
                  cybercorns
                </Heading>
              </Box>

              <Flex
                gap={{ base: 4, md: 6 }}
                color="sand.300"
                fontSize={{ base: 'sm', md: 'md' }}
                display={{ base: 'none', md: 'flex' }}
              >
                <Link href="#what-we-do">what we do</Link>
                <Link href="#topics">topics</Link>
                <Link href="#competitions">competitions</Link>
                <Link href="#join">join</Link>
              </Flex>
            </Flex>

            <Grid
              flex="1"
              alignItems="center"
              gap={{ base: 12, lg: 16 }}
              py={{ base: 12, md: 16 }}
              templateColumns={{ base: '1fr', lg: 'minmax(0, 1.3fr) minmax(320px, 0.7fr)' }}
            >
              <Box>
                <Stack spacing={6} maxW="2xl">
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color="sand.300">
                    Hi @everyone! want to learn cybersecurity AND actually use
                    it?
                  </Text>

                  <Heading
                    as="h1"
                    fontSize={{ base: '5xl', md: '7xl', xl: '8xl' }}
                    lineHeight="0.92"
                    letterSpacing="-0.04em"
                  >
                    cybercorns
                  </Heading>

                  <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="xl">
                    CyberUnicorns is NCSSM Durham&apos;s official cybersecurity
                    club, and we&apos;re recruiting members for this year.
                  </Text>

                  <Text fontSize={{ base: 'md', md: 'lg' }} color="sand.300" maxW="xl">
                    We run optional weekly meetings, teach through hands-on
                    projects, and make room for beginners who want to turn
                    curiosity into real skill fast.
                  </Text>

                  <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                    <Button
                      as="a"
                      href={joinLinks.discord}
                      target="_blank"
                      rel="noreferrer"
                      bg="accent.500"
                      color="coal.950"
                      rounded="sm"
                      px={7}
                      _hover={{ bg: 'accent.400' }}
                    >
                      join the discord
                    </Button>
                    <Button
                      as="a"
                      href="#join"
                      variant="outline"
                      borderColor="whiteAlpha.300"
                      color="sand.50"
                      rounded="sm"
                      px={7}
                      _hover={{ bg: 'whiteAlpha.100' }}
                    >
                      how to join
                    </Button>
                  </Stack>

                  <Flex
                    wrap="wrap"
                    gap={{ base: 3, md: 5 }}
                    color="sand.300"
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    <Text>weekly meetings</Text>
                    <Text>hands-on projects</Text>
                    <Text>ctf training</Text>
                    <Text>leadership welcome</Text>
                  </Flex>
                </Stack>
              </Box>

              <Box>
                <Stack
                  spacing={6}
                  pl={{ lg: 8 }}
                  borderLeft={{ lg: '1px solid' }}
                  borderColor="whiteAlpha.200"
                >
                  <Box>
                    <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} mb={3}>
                      what the club feels like
                    </Heading>
                    <Text color="sand.300">
                      You do not need to show up as an expert. If you show
                      initiative, you are welcome here even if you are brand new
                      to cybersecurity.
                    </Text>
                  </Box>

                  <Divider borderColor="whiteAlpha.200" />

                  <Box>
                    <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} mb={3}>
                      big opportunity
                    </Heading>
                    <Text color="sand.300">
                      We have a direct opportunity to work with the National
                      Coast Guard and other organizations and companies, so the
                      work does not stop at theory.
                    </Text>
                  </Box>

                  <Divider borderColor="whiteAlpha.200" />

                  <Box>
                    <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} mb={3}>
                      first meeting
                    </Heading>
                    <Text color="sand.300">
                      The first meeting and interest session details will be
                      posted here and in Discord as soon as the schedule is
                      locked.
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Container>
        </Box>

        <Container maxW="7xl" px={{ base: 6, md: 8 }}>
          <RevealBlock>
            <Box
              as="section"
              id="what-we-do"
              py={{ base: 14, md: 20 }}
              borderBottom="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Grid
                gap={{ base: 10, lg: 12 }}
                templateColumns={{ base: '1fr', lg: 'minmax(0, 1fr) minmax(300px, 0.9fr)' }}
              >
                <Box>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
                    what we do
                  </Heading>
                  <Text maxW="2xl" color="sand.300" fontSize={{ base: 'md', md: 'lg' }}>
                    CyberUnicorns gives members a place to practice real
                    security work with people who want to build, compete, and
                    help each other level up.
                  </Text>

                  <Stack mt={8} spacing={0} borderTop="1px solid" borderColor="whiteAlpha.200">
                    {whatWeDo.map((item, index) => (
                      <Flex
                        key={item}
                        align="baseline"
                        gap={4}
                        py={5}
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                      >
                        <Text color="accent.400" minW="42px">
                          {String(index + 1).padStart(2, '0')}
                        </Text>
                        <Text fontSize={{ base: 'lg', md: '2xl' }}>{item}</Text>
                      </Flex>
                    ))}
                  </Stack>
                </Box>

                <Box>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
                    leadership is open
                  </Heading>
                  <Text color="sand.300" fontSize={{ base: 'md', md: 'lg' }} mb={6}>
                    Looking for leadership. If you show initiative, you are
                    welcome even if you are new to cybersecurity. That means we
                    want builders, organizers, challenge writers, project leads,
                    and members who just keep showing up ready to work.
                  </Text>
                  <Text color="sand.300" fontSize={{ base: 'md', md: 'lg' }}>
                    The club mixes technical practice with real collaboration, so
                    members can leave with proof of work instead of only notes.
                  </Text>
                </Box>
              </Grid>
            </Box>
          </RevealBlock>

          <RevealBlock delay={0.05}>
            <Box
              as="section"
              id="topics"
              py={{ base: 14, md: 20 }}
              borderBottom="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
                topics we cover
              </Heading>
              <Text maxW="3xl" color="sand.300" fontSize={{ base: 'md', md: 'lg' }} mb={10}>
                We still teach the categories people expect from picoCTF, but we
                also push into cloud, identity, detection, and the practical
                tooling students actually need now.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={5}>
                {topicGroups.map((topic) => (
                  <TopicPanel key={topic.title} topic={topic} />
                ))}
              </SimpleGrid>
            </Box>
          </RevealBlock>

          <RevealBlock delay={0.1}>
            <Box
              as="section"
              id="competitions"
              py={{ base: 14, md: 20 }}
              borderBottom="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Grid
                gap={{ base: 10, lg: 14 }}
                templateColumns={{ base: '1fr', xl: 'minmax(0, 0.95fr) minmax(0, 1.05fr)' }}
              >
                <Box
                  border="1px solid"
                  borderColor="rgba(214, 164, 93, 0.42)"
                  bg="coal.900"
                  rounded="sm"
                  overflow="hidden"
                  h="full"
                  transition="box-shadow 160ms ease, transform 160ms ease"
                  _hover={{ boxShadow: '0 18px 45px rgba(0, 0, 0, 0.22)', transform: 'translateY(-2px)' }}
                >
                  {/* this is the one card the user asked us to keep. */}
                  <Image
                    src="/pico.png"
                    alt="picoCTF"
                    objectFit="cover"
                    h={{ base: '220px', md: '280px' }}
                    w="full"
                  />
                  <Box p={{ base: 5, md: 6 }}>
                    <Flex justify="space-between" gap={4} align="baseline" mb={4}>
                      <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }}>
                        picoCTF
                      </Heading>
                      <Text color="accent.400">featured competition</Text>
                    </Flex>
                    <Text color="sand.300" fontSize={{ base: 'md', md: 'lg' }} mb={6}>
                      Carnegie Mellon&apos;s picoCTF is the cleanest place for
                      new members to start competing, because every major skill
                      lane appears in one ecosystem and the challenges reward
                      real growth.
                    </Text>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} color="sand.300">
                      <Text>web exploitation</Text>
                      <Text>cryptography</Text>
                      <Text>reverse engineering</Text>
                      <Text>forensics</Text>
                      <Text>binary exploitation</Text>
                      <Text>general skills</Text>
                    </SimpleGrid>
                  </Box>
                </Box>

                <Box>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
                    competition layout
                  </Heading>
                  <Text color="sand.300" fontSize={{ base: 'md', md: 'lg' }} mb={8}>
                    picoCTF stays front and center, but the club trains across a
                    wider competition season so members can build rhythm over the
                    whole year.
                  </Text>

                  <Stack spacing={0} borderTop="1px solid" borderColor="whiteAlpha.200">
                    {competitionTracks.map((track) => (
                      <Flex
                        key={track.name}
                        py={5}
                        gap={4}
                        justify="space-between"
                        align={{ base: 'flex-start', md: 'center' }}
                        flexDirection={{ base: 'column', md: 'row' }}
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                      >
                        <Box maxW="2xl">
                          <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} mb={2}>
                            {track.name}
                          </Heading>
                          <Text color="sand.300">{track.summary}</Text>
                        </Box>
                        <Text color="accent.400" minW={{ md: '150px' }}>
                          {track.timing}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Box>
          </RevealBlock>

          <RevealBlock delay={0.15}>
            <Box
              as="section"
              py={{ base: 14, md: 20 }}
              borderBottom="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
                placements and pathways
              </Heading>
              <Text maxW="3xl" color="sand.300" fontSize={{ base: 'md', md: 'lg' }} mb={10}>
                The club is building routes into nonprofit work, public-sector
                collaboration, and industry-facing experience so members can put
                technical growth in motion quickly.
              </Text>

              <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
                {pathways.map((pathway) => (
                  <PathwayBox key={pathway.title} pathway={pathway} />
                ))}
              </SimpleGrid>
            </Box>
          </RevealBlock>

          <RevealBlock delay={0.2}>
            <Box as="section" id="join" py={{ base: 14, md: 20 }}>
              <Grid
                gap={{ base: 10, lg: 12 }}
                templateColumns={{ base: '1fr', lg: 'minmax(0, 1fr) minmax(300px, 0.85fr)' }}
              >
                <Box>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
                    how to join
                  </Heading>
                  <Stack spacing={5} borderTop="1px solid" borderColor="whiteAlpha.200">
                    <Box pt={5}>
                      <Text fontSize={{ base: 'xl', md: '2xl' }} mb={2}>
                        1. Join the Discord
                      </Text>
                      <Link href={joinLinks.discord} color="accent.400" isExternal>
                        {joinLinks.discord}
                      </Link>
                    </Box>

                    <Divider borderColor="whiteAlpha.200" />

                    <Box>
                      <Text fontSize={{ base: 'xl', md: '2xl' }} mb={2}>
                        2. Follow the Instagram and fill out the interest form
                      </Text>
                      <Link href={joinLinks.interestForm} color="accent.400" isExternal>
                        open the interest form
                      </Link>
                    </Box>

                    <Divider borderColor="whiteAlpha.200" />

                    <Box pb={5}>
                      <Text fontSize={{ base: 'xl', md: '2xl' }} mb={2}>
                        3. Come to the first meeting or interest session
                      </Text>
                      <Text color="sand.300">
                        Details will be posted on the website and in Discord.
                      </Text>
                    </Box>
                  </Stack>
                </Box>

                <Box
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  bg="coal.900"
                  rounded="sm"
                  p={{ base: 5, md: 6 }}
                  alignSelf="start"
                >
                  <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} mb={4}>
                    ready to get involved
                  </Heading>
                  <Text color="sand.300" fontSize={{ base: 'md', md: 'lg' }} mb={6}>
                    This is a good year to join if you want to learn fast,
                    compete with a team, and step into leadership instead of
                    waiting until you feel perfectly ready.
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                    <Button
                      as="a"
                      href={joinLinks.discord}
                      target="_blank"
                      rel="noreferrer"
                      bg="accent.500"
                      color="coal.950"
                      rounded="sm"
                      _hover={{ bg: 'accent.400' }}
                    >
                      join now
                    </Button>
                    <Button
                      as="a"
                      href={joinLinks.interestForm}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                      borderColor="whiteAlpha.300"
                      color="sand.50"
                      rounded="sm"
                      _hover={{ bg: 'whiteAlpha.100' }}
                    >
                      interest form
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Box>
          </RevealBlock>
        </Container>

        <Box
          as="footer"
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          py={8}
          textAlign="center"
          color="sand.400"
        >
          <Text>&copy; 2026 CyberUnicorns</Text>
        </Box>
      </Box>
    </>
  )
}
