import Image from "next/image";

import iconChevronDown from 'public/assets/icons/icon_chevron_down.svg';

import './film-card.css';

export default function FilmCard({ image, onclick }) {

    let caminhoImagem = '/assets/filmes/BrenéBrown.jpg';

    if (image) {
        caminhoImagem = '/assets/filmes/' + image + '.jpg';
    }

    const style = {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 79.69%, #000 100%), url('${caminhoImagem}'), lightgray 50% / cover no-repeat`
    }

    return (
        <div className="w-80 h-44 rounded-lg flex flex-col justify-end pb-2 cursor-pointer" style={style} onClick={onclick}>
            <Image src={iconChevronDown} alt="" width={20} height={20}/>
        </div>
    )
}