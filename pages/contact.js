import Head from 'next/head'
import Header from '@components/Header'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@components/Nav'
import StickyTop from '@components/StickyTop'

export default function Content() {

  return (
    <div className>
      <StickyTop />
      <div className="container mt-20 max-w-screen-2xl m-auto">
        <Head>
          <title>Brooke Howard</title>
          <meta name="title" content="Brooke Howard" />
          <meta name="description" content="Brooke Howard is an artist based in Los Angeles, CA." />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap" rel="stylesheet"></link>
          
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta name="theme-color" content="#ffffff"></meta>
          
        </Head>

        <main>
          <Header />

          <Nav selected='contact' />
          
          <div className="flex flex-wrap justify-center text-center p-10 text-white">
            <p>
              For press and show inquires, please email&nbsp;<a href="mailto:brookehowardmusic@gmail.com" target="_blank" className="underline hover:no-underline">brookehowardmusic@gmail.com</a>.
            </p>
          </div>
          <div className="flex flex-wrap justify-center p-10 text-white">
            <Image 
                src={'/images/crawlin-alt.jpg'}
                width={600}
                height={600}
                alt="Brooke Howard"
                className="hover:shadow-xl transition duration-500 ease-in-out rounded-sm"
            />
          </div>
        </main>
      </div>

    </div>
  )
}