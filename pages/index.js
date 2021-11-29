import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify 1.337</title>
      </Head>

      <main>
        <Sidebar />
        {/* center */}

        <div>
          {/* player */}
        </div>
      </main>
    </div>
  )
}
