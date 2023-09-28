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
  const [exit, setExit] = useState(false);
  
  const openModal = () => {
    document.body.classList.add('no-scroll');
    setExit(false);
    setShowModal(true);
  };
  
  const closeModal = () => {
    document.body.classList.remove('no-scroll');
    setShowModal(false);
  };

  const handleCloseModal = (e) => {
    if (e.target.className.includes("background")) {
      setExit(true);
      setTimeout(() => setShowModal(false), 200);
    }
  };

  return (
    <main className="flex">
      <Navbar/>
      <section className="ml-24 mr-20 w-full sm:w-[calc(100%-60px)] min-h-screen pl-14">
        <article className="mt-[5vh] mx-55">
          <div className="flex justify-between header">
            <h2 className="text-White text-2xl font-semibold">Recentemente adicionados</h2>
            <Button href="/new-film">
              <Image src={iconAdd} alt="" />
              Novo filme
            </Button>
          </div>
          <div className="flex flex-wrap justify-between mt-8 gap-20">
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
        <div className={`background ${exit ? 'exit' : ''}`} onClick={(e) => handleCloseModal(e)}>
          <div className={`banner-filme ${exit ? 'exit' : ''}`}>
            <div className="infos-filme">
              <h3 className="text-White font-anton text-5xl font-normal">BRENÉ BROWN</h3>
              <p className="genero text-gray-400 text-sm">Suspense</p>
              <p className="ano text-gray-400 text-sm">2019</p>
              <p className="sinopse text-White text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi.</p>
              <p className="diretor text-White text-sm">Diretor: Todd Burns</p>
              <Button>
                <Image src={iconPlay} alt="" width={20} height={20} />
                Assistir trailer
              </Button>
            </div>
            <div className="icons-filme">
              <Image src={iconEdit} alt="" width={32} height={32} />
              <Image src={iconTrash} alt="" width={32} height={32} />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
