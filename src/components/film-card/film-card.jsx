"use client";

import Image from "next/image";
import { useState } from "react";
import iconChevronDown from 'public/assets/icons/icon_chevron_down.svg';
import './film-card.css';
import ModalBanner from '@/components/modal-banner/modal-banner';
import { destroy } from "@/actions/films";
import { useRouter } from "next/navigation";

export default function FilmCard({ filme }) {
    const [showModal, setShowModal] = useState(false);
    const [exit, setExit] = useState(false);
    const { push } = useRouter();

    const defaultImagePath = '/assets/filmes/BrenéBrown.jpg';

    const getFilmImagePath = (filme) => filme ? `/assets/filmes/${filme.caminhoBanner}` : defaultImagePath;

    const imagePath = getFilmImagePath(filme);

    function openModal() {
        blockScroll();
        setExit(false);
        setShowModal(true);
    }

    function closeModal(e) {
        if (isBackgroundClick(e)) {
            initiateExitModal();
        }
    }

    const isBackgroundClick = (e) =>  e.target.className.includes("background");

    function initiateExitModal() {
        allowScroll();
        setExit(true);
        setTimeout(() => {
            setShowModal(false);
        }, 200);
    }

    function blockScroll() {
        document.body.classList.add('no-scroll');
        window.scrollTo(0, 0);
    }

    function allowScroll() {
        document.body.classList.remove('no-scroll');
    }

    
    const deleteFilm = () => {
        initiateExitModal();
        destroy(filme.id)
    }
    
    const editFilm = () => {
        initiateExitModal();
        push("/films/" + filme.id)
    }

    return (
        <>
            <div onClick={openModal} className="filme" style={getFilmStyle(imagePath)}>
                <Image src={iconChevronDown} alt="Expand icon" />
            </div>
            <ModalBanner isOpen={showModal} onClose={closeModal} filmeSelecionado={filme} exit={exit} banner={imagePath} handleDelete={deleteFilm} handleEdit={editFilm} />
        </>
    )
}

function getFilmStyle(imagePath) {
    return {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 79.69%, #000 100%), url('${imagePath}'), lightgray 50% / cover no-repeat`
    };
}
