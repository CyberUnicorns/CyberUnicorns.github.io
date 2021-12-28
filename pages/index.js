import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { Landing } from '../components/Landing'
import { Benefits } from "../components/Benefits"
import { Topics } from "../components/Topics"
import { Join } from "../components/Join"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>CyberUnicorns - NCSSM&apos;s Cybersecurity Club</title>
      </Head>
      <NavBar />
      <Landing />
      <Join />
      <Benefits />
      <Topics />
      <Footer />

    </>
  )
}
