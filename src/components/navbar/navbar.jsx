"use client"

import Logo from 'public/assets/logo_reduce.svg';
import iconSearch from 'public/assets/icons/icon_search.svg';
import iconFilm from 'public/assets/icons/icon_film.svg';
import iconStar from 'public/assets/icons/icon_star.svg';
import iconUser from 'public/assets/icons/icon_user.svg';

import Link from "next/link";
import Image from "next/image";

import './navbar.css';

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
    const { user, login, logout } = useContext(AuthContext)

    return (
        <nav className="navbar">
            <Link href="/"><Image src={Logo} alt="" /></Link>
            <Link href="/search"><Image src={iconSearch} alt="" /></Link>
            <Link href="/films"><Image src={iconFilm} alt="" /></Link>
            <Link href="/favoritos"><Image src={iconStar} alt="" /></Link>
            <Link href="/perfil"><Image src={iconUser} alt="" /></Link>
            <div>
                <button onClick={() => login("arthur@email.com", "senha123")}>login</button>
                <button onClick={() => logout()}>logout</button>
                {user?.name}
            </div>
        </nav>
    )
}
