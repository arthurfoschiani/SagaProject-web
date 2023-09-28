//import './not-found.css';

import Button from '@/components/button/button';

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center flex-col gap-2">
        <h2 className="text-2xl font-semibold">Página não encontrada</h2>
        <Button href="/">Voltar para o início</Button>
    </main>
  )
}
