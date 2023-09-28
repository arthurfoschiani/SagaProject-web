//import './page.css';

import Navbar from '@/components/navbar/navbar';

export default function Home() {
  return (
    <main className="flex">
      <Navbar/>
      <section className="ml-10 w-full sm:w-[calc(100%-60px)] min-h-screen">
        <article className="m-5vh m-10">
          <div className="flex justify-between header">
            <h2 className="text-White text-2xl font-semibold">Home</h2>
          </div>
          <p>A página desenvolvida pela dupla para este projeto é a página de Gerenciamento de Filmes. Para acessar a página de Gerenciamento de Filmes, por favor, clique no ícone representado pelo terceiro ícone do menu no site.</p>
        </article>
      </section>
    </main>
  )
}
