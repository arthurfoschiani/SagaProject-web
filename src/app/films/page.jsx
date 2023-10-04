'use client';

import { useState, useEffect } from "react";

import Image from "next/image";

import './page.css';

import iconAdd from 'public/assets/icons/icon_add.svg';
import iconPlay from 'public/assets/icons/icon_play.svg';
import iconEdit from 'public/assets/icons/icon_edit.svg';
import iconTrash from 'public/assets/icons/icon_trash.svg';

import Navbar from '@/components/navbar/navbar';
import Button from '@/components/button/button';
import FilmCard from '@/components/film-card/film-card';

async function carregarDados() {
  const url = "http://localhost:8080/filmes"
  try {
    const resp = await fetch(url);

    if (resp.status !== 200) {
      alert("Erro ao buscar dados dos filmes");
      return [];
    }

    return await resp.json();
  } catch (error) {
    console.error("Erro ao buscar dados dos filmes:", error);
    return [];
  }
}

export default function Films() {
  const [showModal, setShowModal] = useState(false);
  const [exit, setExit] = useState(false);
  const [filmes, setFilmes] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  const openModal = (filme) => {
    document.body.classList.add('no-scroll');
    window.scrollTo(0, 0);
    setFilmeSelecionado(filme);
    setExit(false);
    setShowModal(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.className.includes("background")) {
      setExit(true);
      document.body.classList.remove('no-scroll');
      setTimeout(() => {
        setShowModal(false)
        setFilmeSelecionado(null)
      }, 200);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await carregarDados();
      setFilmes(data);
    }

    fetchData();
  }, []);

  const styleBanner = (caminhoBanner) => {
    let caminhoImagem = '/assets/filmes/BrenéBrown.jpg';

    if (caminhoBanner) {
      caminhoImagem = '/assets/filmes/' + caminhoBanner + '.jpg';
    }

    return {
      background: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), url('${caminhoImagem}'), lightgray 50%`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }

  const getYear = (data) => new Date(data).getFullYear();

  return (
    <main>
      <Navbar />
      <section>
        <article>
          <div className="header">
            <h2>Recentemente adicionados</h2>
            <Button href="/films/new">
              <Image src={iconAdd} alt="" />
              Novo filme
            </Button>
          </div>
          <div className="lista_filmes">
            {filmes.map(filme => <FilmCard key={filme.id} image={filme?.caminhoBanner} onclick={() => openModal(filme)} />)}
            <FilmCard image={filmes[0]?.caminhoBanner} onclick={openModal} />
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
          <div className={`banner-filme ${exit ? 'exit' : ''}`} style={styleBanner(filmeSelecionado?.caminhoBanner)} >
            <div className="infos-filme">
              <h3>{filmeSelecionado?.titulo}</h3>
              <p className="genero">{filmeSelecionado?.titulo}</p>
              {filmeSelecionado?.dataEstreia && (
                <p className="ano">{getYear(filmeSelecionado?.dataEstreia)}</p>
              )}
              <p className="sinopse">{filmeSelecionado?.sinopse}</p>
              <p className="diretor">Diretor: {filmeSelecionado?.diretor}</p>
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