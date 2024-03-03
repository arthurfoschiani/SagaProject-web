"use client"

import { useForm } from 'react-hook-form';
import './page.css';

import Input from '@/components/input/input';
import Button from '@/components/button/button';

export default function Home() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div id="login">
      <div className="card-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="header">
            <h1>Seja bem-vindo</h1>
            <p>Entre para acessar o catálogo de filmes</p>
          </div>
          <div className="formulario">
            <Input register={register} nameSpace="email" placeholder="Email"/>
            <Input register={register} nameSpace="senha" placeholder="Senha" type="password"/>
            <Button type="button">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div >
  )
}
