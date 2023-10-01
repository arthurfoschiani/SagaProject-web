import Image from "next/image";

import './page.css';

import Navbar from '@/components/navbar/navbar';
import Button from '@/components/button/button';

export default function FilmManagement() {
  return (
    <main>
      <Navbar/>
      <section>
        <article className="new-film">
          <div className="header">
            <h2>Cadastro de filmes</h2>
          </div>
          <form>
            <div className="input-form">
              <p>Título do filme</p>
              <input placeholder="Harry Potter" />
            </div>
            <div className="input-form">
              <p>Sinopse</p>
              <input placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi." />
            </div>
            <div className="input-form">
              <p>Diretor</p>
              <input placeholder="Harry Potter" />
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}
