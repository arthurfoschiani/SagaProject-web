"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

import { create } from "@/actions/films";

import './page.css';

import iconAdd from 'public/assets/icons/icon_add.svg';

import Navbar from '@/components/navbar/navbar';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import toast from "react-hot-toast";

export default function FilmManagement() {
  const { push } = useRouter();

  async function onSubmit(formData) {
    const resp = await create(formData)

    if (resp?.error) {
      toast.error(resp.error)
      return
    }

    push("/films")
  }

  return (
    <main>
      <Navbar />
      <section>
        <article className="new-film">
          <div className="header">
            <h2>Cadastro de filmes</h2>
          </div>
          <div className="content">
            <form action={onSubmit}>
              <Input name="titulo" label="Título do filme" placeholder="Harry Potter" />
              <Input name="sinopse" label="Sinopse" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi." typeInput="textearea" />
              <Input name="diretor" label="Diretor" placeholder="Harry Potter" />
              <Input name="duracao" label="Duração" placeholder="2h 14m" />
              <Input name="dataEstreia" label="Data de Estreia" placeholder="21/12/2003" type="date" />
              <Input name="caminhoBanner" label="Caminho da imagem" placeholder="harrypotter" />
              <Input name="faixaEtaria" label="Faixa Etária" placeholder="18" type="number" />
              <Input name="idCategoria" label="Categoria" placeholder="Aventura" type="number" />
              <Button type="button">
                <Image src={iconAdd} alt="" />
                Adicionar
              </Button>
            </form>
            <div className="box-slide-image">
              <p>Arraste a imagem do filme</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
