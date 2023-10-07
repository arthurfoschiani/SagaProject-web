import Navbar from '@/components/navbar/navbar';
import FormEdit from "./form-edit";
import { get } from '@/actions/films';
import '../new/page.css';

export default async function CategoriaNew({ params }) {

  const filme = await get(params.id)

  return (
    <main>
      <Navbar />
      <section>
        <article className="new-film">
          <div className="header">
            <h2>Atualizar filme</h2>
          </div>
          <FormEdit filme={filme} />
        </article>
      </section>
    </main>
  )
}