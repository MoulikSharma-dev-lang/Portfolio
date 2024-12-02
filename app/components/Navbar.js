import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="bg-blue-950 py-3">
            <ul className="flex justify-center gap-3">
                <Link className="font-bold text-2xl" href={"/"}>Home</Link>
                <Link className="font-bold text-2xl" href={"/contact"}>Contact</Link>
            </ul>
        </nav>
    )
}