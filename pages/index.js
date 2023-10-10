import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Song from '@components/Song'
import Image from 'next/image'


export default function Home() {
  const songs = [
    { name: 'Lavender', id: 'lavender', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2xAV3PYShkeveVZ4vczG3s?si=1b7bf13fb9f9409e' },
    { name: 'Crawlin', id: 'crawlin', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2CsTErdvL58h29eenqBdps?si=7736876f656a44ef' },
    { name: 'Hallucinating', id: 'hallucinating', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2d9vUoptceUm4fnukCLRgT?si=2d1faccc34e84316' },
    { name: 'uh oh', id: 'uhoh', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/53MUYnJouuLhcAS7gvwka3?si=7c48fb3ccf994b0a' },
    { name: 'Moon', id: 'moon', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/3lYcJ3JHbpFrndx82L8XY0?si=2990ae9f40a74567' },
    { name: 'Trip Out (feat. KEENE93)', id: 'tripout', artist: 'Brooke Howard, lye.ll', spotify: 'https://open.spotify.com/track/6IedGccMlLRVum5ydOh9vf?si=a96920dd1b5046be' },
    { name: 'Morning Night', id: 'morningnight', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/2I2BwJjFXT1V1mBd29sldG?si=efb27ecd6da04924' },
    { name: 'Magic', id: 'magic', artist: 'Brooke Howard', spotify: 'https://open.spotify.com/track/18hbvXGsy23F7UjNBL0ruE?si=d82fb5d18d0e41d7' }
  ]

  const socials = [
    { name: 'Instagram', id: 'instagram', link: 'https://www.instagram.com/brocklee/' },
    { name: 'Tik-Tok', id: 'tiktok', link: 'https://www.tiktok.com/@itsbrookehoward?_t=8gOr6fnFbCw&_r=1' },
    { name: 'Spotify', id: 'spotify', link: 'https://open.spotify.com/artist/2LvxnjW2spHC23Ue7WUMiH?si=OZI4a7eGQ-iPHlZ4StujUw'},
    { name: 'Apple Music', id: 'applemusic', link: 'https://music.apple.com/us/artist/brooke-howard/1555424708'}
  ]

  return (
    <div className="container max-w-none mt-20">
      <Head>
        <title>Brooke Howard</title>
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
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>

        <Header />

        <div className="flex flex-wrap justify-center mt-3 mb-0 pb-0">
          {socials.map((social) => {
            return (
              <div className="p-5">
                <a href={social.link} target='_blank'>
                  <Image
                    src={'/images/socials/' + social.id + '-w500.png'}
                    width={30}
                    height={30}
                    alt={social.name}
                    className="cursor-pointer hover:shadow-xl transition duration-500 ease-in-out transform opacity-80 hover:opacity-100"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center mt-0 mb-40">
          <Song name='GIMME' id='gimme' artist='Brooke Howard' spotify='https://orcd.co/gimme' />
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

      <Footer />
    </div>
  )
}