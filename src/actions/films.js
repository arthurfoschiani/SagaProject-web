"use server"

import { revalidatePath } from "next/cache"
const url = `${process.env.NEXT_PUBLIC_API_URL}/filmes`

export async function carregarDados() {
    const resp = await fetch(url);

    if (resp.status !== 200) {
        alert("Erro ao buscar dados dos filmes");
        return
    }

    return await resp.json();
}

export async function create(data, categoriaId) {

    const formData = Object.fromEntries(data);

    formData.categoria = { id: categoriaId };

    const options = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    }

    console.log(options)

    const resp = await fetch(url, options)

    if (resp.status !== 201) {
        const messages = await resp.json()
        return {
            error: "Erro ao cadastrar",
            messages
        }
    }

    await revalidatePath("/films")
}

export async function destroy(id) {
    const options = {
        method: "DELETE"
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 204) {
        return { error: "Erro ao apagar filme" }
    }

    await revalidatePath("/films")

}

export async function get(id) {
    const resp = await fetch(url + "/" + id)

    if (resp.status !== 200) {
        return { error: "Filme não encontrado" }
    }

    return await resp.json()
}

export async function update(Filme) {
    const options = {
        method: "PUT",
        body: JSON.stringify(Filme),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url + "/" + Filme.id, options)

    if (resp.status !== 200) {
        return { error: "Erro ao alterar Filme" }
    }

    await revalidatePath("/films")
}