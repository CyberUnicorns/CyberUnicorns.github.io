import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar'
import { Landing } from '../components/Landing'
import { Benefits } from '../components/Benefits'
import { Join } from '../components/Join'
import { Topics } from '../components/Topics'
import { Footer } from '../components/Footer'

// this puts the old component layout back in place with the updated content.
export default function Home() {
  return (
    <>
      <Head>
        <title>Cybercorns - NCSSM Durham&apos;s Cybersecurity Club</title>
        <meta
          name="description"
          content="Cybercorns is recruiting new members for NCSSM Durham's cybersecurity club."
        />
      </Head>
      <NavBar />
      <Landing />
      <Box bg="gray.100">
        <Benefits />
        <Join />
        <Topics />
        <Footer />
      </Box>
    </>
  )
}
