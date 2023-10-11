import Image from "next/image";
import Link from "next/link";

export default function Song({ name, id, artist, spotify }) {

    return (
        <div className="p-8" key={id}>
            <a href= {spotify} target="_blank">
                <Image 
                    src={'/images/' + id + '.jpg'}
                    width={400}
                    height={400}
                    alt={name}
                    className="cursor-pointer hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105 rounded-sm"
                />
            </a>
        </div>
    )   
}