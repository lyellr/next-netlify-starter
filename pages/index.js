import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import StickyTop from '@components/StickyTop'
import Song from '@components/Song'
import Album from '@components/Album'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@components/Nav'


export default function Home() {
  const albums = [
    { name: 'Witch Trap', id: 'witchtrap', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/album/13E8aNmPzfgwz4hQprcPYg?si=HQam_AyGTo6hsqvJaeLEjA' }
  ]
  const songs = [
    
    { name: 'Lavender', id: 'lavender', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2xAV3PYShkeveVZ4vczG3s?si=1b7bf13fb9f9409e' },
    { name: 'Moon', id: 'moon', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/3lYcJ3JHbpFrndx82L8XY0?si=2990ae9f40a74567' },
    { name: 'Crawlin', id: 'crawlin', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2CsTErdvL58h29eenqBdps?si=7736876f656a44ef' },
    { name: 'Hallucinating', id: 'hallucinating', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2d9vUoptceUm4fnukCLRgT?si=2d1faccc34e84316' },
    { name: 'GIMME (feat. lye.ll)', id: 'gimme', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/4lEADIh899dcWmza1jbr3e?si=54461c7dc4d44c7a' },
    { name: 'uh oh', id: 'uhoh', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/53MUYnJouuLhcAS7gvwka3?si=7c48fb3ccf994b0a' },
    { name: 'Trip Out (feat. KEENE93)', id: 'tripout', artist: 'Brooke Howard, lye.ll', spotify: 'https://open.spotify.com/track/6IedGccMlLRVum5ydOh9vf?si=a96920dd1b5046be' },
    { name: 'Morning Night', id: 'morningnight', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2I2BwJjFXT1V1mBd29sldG?si=efb27ecd6da04924' },
    { name: 'Magic', id: 'magic', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/18hbvXGsy23F7UjNBL0ruE?si=d82fb5d18d0e41d7' }
  ]

  return (
    <div>
      <StickyTop />
      <div className="container sm:mt-20 max-w-screen-2xl m-auto">
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

          <Nav selected='releases' />

          <div className="gallery-container">
            {albums.map((album) => {
            return (
              <Album
                name={album.name}
                id={album.id}
                artist={album.artist}
                spotify={album.spotify}
              />
              );
            })}
            {songs.map((song) => {
            return (
              <Song
                name={song.name}
                id={song.id}
                artist={song.artist}
                spotify={song.spotify}
              />
              );
            })}
          </div>
        </main>
      </div>
    </div>


  )
}