import Image from "next/image";

export default function Header() {
  return (
    <div className="justify-center flex flex-wrap pl-10 pr-10">
    <Image
        src={'/images/brooke_sig.png'}
        width={400}
        height={100}
        alt='Brooke Howard'
    />
    </div>
  );
}
