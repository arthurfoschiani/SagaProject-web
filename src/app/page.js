"use client"

import { useForm } from 'react-hook-form';
import './page.css';

import Input from '@/components/input/input';
import Button from '@/components/button/button';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Home() {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm()
  const { login } = useContext(AuthContext)

  const onSubmit = async (data) => {
    const resp = await login(data.email, data.senha);
    if (resp?.erro) {
      toast.error(resp.erro)
      return
    }
    push('/dashboard')
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
            <Input register={register} nameSpace="email" placeholder="Email" />
            <Input register={register} nameSpace="senha" placeholder="Senha" type="password" />
            <Button type="button">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div >
  )
}
