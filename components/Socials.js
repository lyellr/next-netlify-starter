import Image from "next/image";

export default function Socials() {

    const socials = [
        { name: 'Instagram', id: 'instagram', link: 'https://www.instagram.com/brocklee/' },
        { name: 'Spotify', id: 'spotify', link: 'https://open.spotify.com/artist/2LvxnjW2spHC23Ue7WUMiH?si=OZI4a7eGQ-iPHlZ4StujUw'},
        { name: 'Apple Music', id: 'applemusic', link: 'https://music.apple.com/us/artist/brooke-howard/1555424708'},
        { name: 'Tik-Tok', id: 'tiktok', link: 'https://www.tiktok.com/@itsbrookehoward?_t=8gOr6fnFbCw&_r=1' }
      ]
      
    return(
        <div className="flex flex-wrap">
        {socials.map((social) => {
          return (
            <div className="p-4" key = {social.id}>
              <a href={social.link} target='_blank'>
                <Image
                  src={'/images/socials/' + social.id + '-b500.png'}
                  width={30}
                  height={30}
                  alt={social.name}
                  className="cursor-pointer shadow-md transition duration-100 ease-in-out transform opacity-100 hover:opacity-80 hover"
                />
              </a>
            </div>
          );
        })}
      </div>
    )
}