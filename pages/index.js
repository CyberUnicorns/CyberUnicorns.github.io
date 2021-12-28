import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { Landing } from '../components/Landing'
import { Benefits } from "../components/Benefits"
import { Topics } from "../components/Topics"
import { Join } from "../components/Join"
import { Footer } from "../components/Footer"
import Fade from 'react-reveal/Fade'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>CyberUnicorns - NCSSM&apos;s Cybersecurity Club</title>
      </Head>
      <NavBar />
      <Landing />
      <Box bg="gray.100">
        <Fade>

          <Benefits />
          <Join />
          <Topics />
          <Footer />

        </Fade>
      </Box>

    </>
  )
}
