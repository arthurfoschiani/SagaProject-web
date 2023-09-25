import './not-found.css';

import Button from '@/components/button/button';

export default function NotFound() {
  return (
    <main className="not-found">
        <h2>Página não encontrada</h2>
        <Button href="/">Voltar para o início</Button>
    </main>
  )
}
