"use client"

import './not-found.css';

import Button from '@/components/button/button';

export default function Error({erro}) {
  return (
    <main className="not-found">
        <h2>Um erro aconteceu!</h2>
        <p>{erro.message}</p>
        <Button href="/">Voltar para o início</Button>
    </main>
  )
}
