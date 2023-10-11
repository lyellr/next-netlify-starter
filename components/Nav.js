import Link from "next/link";

export default function Nav(selected) {
    console.log(selected.selected);
    return(
        <div className="flex flex-wrap justify-center mt-5 mb-0 pb-0 text-stone-300 underline-offset-4">
            <div className={"mr-10 hover:underline hover:text-white " + ('releases' == selected.selected ? "underline text-white cursor-default" : "") } ><Link href="/">Releases</Link></div>
            {/*<div className={"mr-10 hover:underline hover:text-white " + ('live' == selected.selected ? "underline text-white cursor-default" : "") } ><Link href="/live">Live</Link></div>
            <div className={"mr-10 hover:underline hover:text-white  " + ('content' == selected.selected ? "underline text-white cursor-default" : "") } ><Link href="/content">Content</Link></div>
            <div className={"mr-10 hover:underline hover:text-white " + ('about' == selected.selected ? "underline text-white cursor-default" : "") } "><Link href="/about">About</Link></div>*/}
            <div className={"mr-0 hover:underline hover:text-white" + ('contact' == selected.selected ? " text-white underline cursor-default" : "") } ><Link href="/contact">Contact</Link></div>
        </div>
    );
}