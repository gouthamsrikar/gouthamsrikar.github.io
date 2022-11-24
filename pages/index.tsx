import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>goutham srikar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Contact />

    </div>
  )
}
