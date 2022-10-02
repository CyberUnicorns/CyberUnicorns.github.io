import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";
import { Numbered } from "./Numbered";
import { UnicornBullet } from "./UnicornBullet";

export function Join() {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl" pt="4">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
          color="blue.700"
          fontWeight="bolder"
          textAlign="center"
        >
          Join Us
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Box
            bg="white"
            px="3"
            boxShadow="xl"
            rounded="md"
            maxW="700px"
            mx="auto"
            mt="4"
            d="flex"
            alignItems="center"
          >
            <Box maxW="420px">
              <UnicornBullet text="All experience levels welcome" />
              <UnicornBullet text="Gain leadership positions" />
              <UnicornBullet text="Win Scholarships" />
              <UnicornBullet text="Learn about programming, hacking, and cryptography" />
              <UnicornBullet text="Solve capture-the-flag challenges" />
            </Box>
          </Box>
          <Box
            align="center"
            bg="white"
            p={8}
            boxShadow="xl"
            rounded="md"
            maxW="500px"
            mx="auto"
            mt="4"
          >
            <Numbered number="1">
              Fill out the{" "}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdbwMFp5wgEvTBW75CwoPy9aCblNMQQsjjVm6yzGxV9WfXbUg/viewform?usp=sf_link"
                color="blue.300"
                isExternal
              >
                member information form
              </Link>
            </Numbered>
            <Numbered number="2">Come to one of our meetings!</Numbered>
            <Numbered number="3">
              Join our{" "}
              <Link
                href="https://www.facebook.com/groups/1331698317252357/"
                color="blue.300"
                isExternal
              >
                Facebook Group
              </Link>
            </Numbered>
            <Text fontWeight="bold" fontSize="3xl" color="orange.400">
              Thursdays @ 8:40 - 9:20 PM
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="blue.700">
              Room: Engineering Suite
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
