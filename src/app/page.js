import './page.css';

import Navbar from '@/components/navbar/navbar';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section>
        <article>
          <div className="header">
            <h2>Home</h2>
          </div>
          <p>A página desenvolvida pela dupla para este projeto é a página de Gerenciamento de Filmes. Para acessar a página de Gerenciamento de Filmes, por favor, clique no ícone representado pelo terceiro ícone do menu no site.</p>
        </article>
      </section>
    </main>
  )
}
