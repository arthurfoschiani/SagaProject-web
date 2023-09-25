import Image from "next/image";

import './page.css';

import Navbar from '@/components/navbar/navbar';
import Button from '@/components/button/button';

export default function FilmManagement() {
  return (
    <main>
      <Navbar/>
      <section>
        <article>
          <div className="header">
            <h2>Cadastro de filmes</h2>
          </div>
        </article>
      </section>
    </main>
  )
}
