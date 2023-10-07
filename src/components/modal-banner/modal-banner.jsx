'use client';

import Image from "next/image";
import './modal-banner.css';
import iconPlay from 'public/assets/icons/icon_play.svg';
import iconEdit from 'public/assets/icons/icon_edit.svg';
import iconTrash from 'public/assets/icons/icon_trash.svg';
import Button from '@/components/button/button';

export default function ModalBanner({ isOpen, onClose, handleDelete, handleEdit, filmeSelecionado, exit, banner }) {

    if (!isOpen) return null;

    const bannerStyle = getBannerStyle(banner);

    return (
        <div className={`background ${exit ? 'exit' : ''}`} onClick={onClose}>
            <div className={`banner-filme ${exit ? 'exit' : ''}`} style={bannerStyle}>
                <FilmInfo filme={filmeSelecionado} />
                <FilmIcons handleDelete={handleDelete} handleEdit={handleEdit} />
            </div>
        </div>
    )
}

function getBannerStyle(banner) {
    return {
        background: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), url('${banner}'), lightgray 50%`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
}

function FilmInfo({ filme }) {
    return (
        <div className="infos-filme">
            <h3>{filme?.titulo}</h3>
            <p className="genero">{filme?.titulo}</p>
            {filme?.dataEstreia && <p className="ano">{getYearFrom(filme?.dataEstreia)}</p>}
            <p className="sinopse">{filme?.sinopse}</p>
            <p className="diretor">Diretor: {filme?.diretor}</p>
            <Button>
                <Image src={iconPlay} alt="Play icon" />
                Assistir trailer
            </Button>
        </div>
    );
}

function FilmIcons({ handleDelete, handleEdit }) {
    return (
        <div className="icons-filme">
            <Image src={iconEdit} alt="Edit icon" onClick={handleEdit} />
            <Image src={iconTrash} alt="Trash icon" onClick={handleDelete} />
        </div>
    );
}

function getYearFrom(data) {
    return new Date(data).getFullYear();
}
