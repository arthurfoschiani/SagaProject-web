import Image from "next/image";

import './page.css';

import iconAdd from 'public/assets/icons/icon_add.svg';

import Navbar from '@/components/navbar/navbar';
import Button from '@/components/button/button';
import FilmCard from '@/components/film-card/film-card';

async function carregarDados() {
  // const randomQueryParam = `cacheBuster=${Math.random()}`;
  // const url = `http://localhost:8080/filmes?${randomQueryParam}`;
  const url = "http://localhost:8080/filmes"

  const resp = await fetch(url);

  if (resp.status !== 200) {
    alert("Erro ao buscar dados dos filmes");
    return
  }

  return await resp.json();
}

export default async function Films() {

  const filmes = await carregarDados();

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
            {filmes.map(filme => <FilmCard key={filme.id} filme={filme} />)}
          </div>
        </article>
      </section>
    </main>
  )
}