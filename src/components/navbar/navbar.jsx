import Logo from 'public/assets/logo_reduce.svg';
import iconSearch from 'public/assets/icons/icon_search.svg';
import iconFilm from 'public/assets/icons/icon_film.svg';
import iconStar from 'public/assets/icons/icon_star.svg';
import iconUser from 'public/assets/icons/icon_user.svg';

import Link from "next/link";
import Image from "next/image";

//import './navbar.css';

export default function Navbar() {
    return (
        <nav className="fixed h-screen bg-#0A0903 p-10 flex flex-col items-start gap-7 mr-24">
            <Link href="/"><Image src={Logo} alt="" width={20} height={20} /></Link>
            <Link href="/search"><Image src={iconSearch} alt="" width={20} height={20} /></Link>
            <Link href="/film-management"><Image src={iconFilm} alt="" width={20} height={20} /></Link>
            <Link href="/favoritos"><Image src={iconStar} alt="" width={20} height={20} /></Link>
            <Link href="/perfil"><Image src={iconUser} alt="" width={20} height={20} /></Link>
        </nav>
    )
}
