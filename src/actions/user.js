"use server"

import { cookies } from 'next/headers'
const url = `${process.env.NEXT_PUBLIC_API_URL}/login`

export async function apiLogin(email, senha) {
    const options = {
        method: "POST",
        body: JSON.stringify({ email, senha }),
        headers: {
            "Content-Type": "application/json"
        },
        next: { revalidate: 0 }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 200) {
        return { erro: 'Usuário inválido!' };
    }

    const json = await resp.json()

    cookies().set(process.env.JWT_COOKIE_KEY, json.token, {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
    })
}

export async function apiLogout() {
    cookies().delete(process.env.JWT_COOKIE_KEY)
}