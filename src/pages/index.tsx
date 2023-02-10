import { type NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#01162D] to-[#95F9C3]/10 bg-[#01162D]">
        <div className="relative container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
          <div>
            <h1 className="text-4xl font-bold">
              Hi, I’m <span className="text-[#95F9C3]">Eduardus</span>
            </h1>
            <p>
              A self-claimed <b>AI Engineer</b> and <b>Software Engineer</b>
            </p>
          </div>
          <div className="absolute bottom-0 left-0">
            <p>Contact Me:</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
