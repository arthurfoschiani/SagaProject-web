import Image from "next/image";

//import './page.css';

import Navbar from '@/components/navbar/navbar';
import Button from '@/components/button/button';

export default function FilmManagement() {
  return (
    <main className="flex">
      <Navbar/>
      <section className="ml-10 w-full sm:w-[calc(100%-60px)] min-h-screen">
        <article className="my-[5vh] mx-80">
          <div className="flex justify-between header">
            <h2 className="text-White text-2xl font-semibold">Cadastro de filmes</h2>
          </div>
        </article>
      </section>
    </main>
  )
}