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
        </article>
      </section>
    </main>
  )
}
