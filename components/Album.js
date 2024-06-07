import Image from "next/image";
import Link from "next/link";

export default function Album({ name, id, artist, spotify }) {

    return (
        <div className="gallery-big-image" key={id}>
            <a href= {spotify} target="_blank">
                <Image 
                    src={'/images/' + id + '.jpg'}
                    width={1000}
                    height={1000}
                    alt={name}
                    className="cursor-pointer hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105 rounded-sm"
                />
            </a>
        </div>
    )   
}