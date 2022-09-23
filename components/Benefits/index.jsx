import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Card } from "./Card";

export function Benefits() {
  return (
    <Box bg="gray.100" p={4} color="gray.800" pt="6">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
              color="blue.700"
              fontWeight="bolder"
              textAlign="center"
            >
              Our Activities
            </Heading>
            <Box
              maxW="700px"
              mx="auto"
              p={4}
              boxShadow="lg"
              bg="white"
              rounded="lg"
              mb="8"
            >
              <Text>
                CyberUnicorns is a student-led club at NCSSM dedicated to
                cybersecurity and it&apos;s opportunities. CyberUnicorns strives
                to engage the NCSSM community with cybersecurity through
                education, capture the flag challenges, possible scholarships.
                By teaching others about cybersecurity, we hope to inform them
                about the various tactics of hackers and how they can keep their
                own websites and even themselves safe. Scroll down to join us!
              </Text>

              <Text fontWeight="bold" mt={4}>
                Here are some of our recent activities!
              </Text>

              <UnorderedList>
                <ListItem>
                  <Link
                    href="https://github.com/CyberUnicorns/Intro-CTF-Challenges-2023"
                    color="blue.300"
                    isExternal
                  >
                    Intro to CTF challenges 2023 (8 challenges)
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    href="https://github.com/CyberUnicorns/Intro-CTF-Challenges"
                    color="blue.300"
                    isExternal
                  >
                    Intro to CTF challenges 2022 (5 challenges)
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    href="https://github.com/CyberUnicorns/Curriculum"
                    color="blue.300"
                    isExternal
                  >
                    CyberUnicorns Curriculum!
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
              color="blue.700"
              fontWeight="bolder"
              textAlign="center"
            >
              Our Calendar
            </Heading>

            <Box d="flex" justifyContent="center">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=c_7d2724885598c2ae7e4cdd1353c7091e5476d093344b26ceaa259ba40ef78189%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
                width="800"
                height="400"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </Box>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="30px" mt="4">
          <Card
            title="Learn Cybersecurity"
            logo="https://www.pngall.com/wp-content/uploads/4/Cyber-Security-PNG-Clipart.png"
          >
            Cybersecurity is one of the fastest growing career paths in the
            world. With techniques through programming, web exploitation, linux
            tools, and cryptography, there&apos;s so much to learn about this
            fascinating topic!
          </Card>
          <Card
            title="CyberStart America"
            logo="https://d33wubrfki0l68.cloudfront.net/2354660573da025dc539425c1a7ce325b437524e/fc06b/images/csa-web-product-02.png"
          >
            A capture the flag compeition that students from across the United
            States compete in. CyberStart America is the most enjoyable way to
            discover your talent, advance your skills and win scholarships in
            cybersecurity! Click{" "}
            <Link
              href="https://www.cyberstartamerica.org/"
              color="blue.400"
              isExternal
            >
              here
            </Link>{" "}
            to learn more.
          </Card>
          <Card title="picoCTF" logo="/pico.png">
            Developed by Carnegie Mellon, picoCTF is a capture the flag
            cybersecurity game for high school students. Join CyberUnicorns as
            we tackle various problems from this competition!
          </Card>
          <Card
            title="Scholarships"
            logo="https://d33wubrfki0l68.cloudfront.net/2a411dd613ce138af90cb6ccacaa2a34a1b8df59/3f54b/images/csa-web-badge-ncsf.png"
          >
            With CyberUnicorns, you can win scholarships from The National Cyber
            Scholarship Foundation. With award levels for Semifinalist,
            Finalist, National Cyber Scholar, and National Cyber Scholar with
            honors, it&apos;s not too difficult to boost your college resume!{" "}
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
