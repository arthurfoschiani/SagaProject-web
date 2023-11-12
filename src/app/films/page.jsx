import Image from "next/image";

import './page.css';

import iconAdd from 'public/assets/icons/icon_add.svg';

import Navbar from '@/components/navbar/navbar';
import Button from '@/components/button/button';
import FilmCard from '@/components/film-card/film-card';
import { carregarDados } from "@/actions/films";

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
            {filmes.content.map(filme => <FilmCard key={filme.id} filme={filme} />)}
          </div>
        </article>
      </section>
    </main>
  )
}