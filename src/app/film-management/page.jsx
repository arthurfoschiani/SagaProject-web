'use client';

import { useState } from "react";

import Image from "next/image";

import './page.css';

import iconAdd from 'public/assets/icons/icon_add.svg';
import iconPlay from 'public/assets/icons/icon_play.svg';
import iconEdit from 'public/assets/icons/icon_edit.svg';
import iconTrash from 'public/assets/icons/icon_trash.svg';

import Navbar from '@/components/navbar/navbar';
import Button from '@/components/button/button';
import FilmCard from '@/components/film-card/film-card';

export default function FilmManagement() {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    document.body.classList.add('no-scroll');
    setShowModal(true);
  };
  
  const closeModal = () => {
    document.body.classList.remove('no-scroll');
    setShowModal(false);
  };

  const handleCloseModal = (e) => {
    if (e.target.className === "background") {
      closeModal();
    }
  };

  return (
    <main>
      <Navbar/>
      <section>
        <article>
          <div className="header">
            <h2>Recentemente adicionados</h2>
            <Button href="/new-film">
              <Image src={iconAdd} alt="" />
              Novo filme
            </Button>
          </div>
          <div className="lista_filmes">
            <FilmCard image="AEraDosDados" onclick={openModal} />
            <FilmCard image="BillGates" onclick={openModal} />
            <FilmCard image="BlackMirror" onclick={openModal} />
            <FilmCard image="BrenéBrown" onclick={openModal} />
            <FilmCard image="ComoFicarRico" onclick={openModal} />
            <FilmCard image="CorpoHumano" onclick={openModal} />
            <FilmCard image="ExplicandoDinheiro" onclick={openModal} />
            <FilmCard image="ExplicandoAMente" onclick={openModal} />
            <FilmCard image="HeadSpace" onclick={openModal} />
            <FilmCard image="MinimalismoJa" onclick={openModal} />
          </div>
        </article>
      </section>
      {showModal && (
        <div className="background" onClick={(e) => handleCloseModal(e)}>
          <div className="banner-filme">
            <div className="infos-filme">
              <h3>BRENÉ BROWN</h3>
              <p className="genero">Suspense</p>
              <p className="ano">2019</p>
              <p className="sinopse">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi.</p>
              <p className="diretor">Diretor: Todd Burns</p>
              <Button>
                <Image src={iconPlay} alt="" />
                Assistir trailer
              </Button>
            </div>
            <div className="icons-filme">
              <Image src={iconEdit} alt="" />
              <Image src={iconTrash} alt="" />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
