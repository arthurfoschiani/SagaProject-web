"use client"

import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import iconAdd from 'public/assets/icons/icon_add.svg';

import Input from '@/components/input/input';
import Button from '@/components/button/button';
import toast from "react-hot-toast";

import '../new/page.css';
import { update } from "@/actions/films";
import { imagensBanner } from "@/app/films/banner-film.constant";

export default function FormEdit({ filme }) {
    const { push } = useRouter();
    const [filmeEdit, setFilmeEdit] = useState(filme)

    async function onSubmit() {
        const resp = await update(filmeEdit)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/films")
    }


    function handleFieldChange(field, value) {
        setFilmeEdit({
            ...filmeEdit,
            [field]: value
        })
    }

    return (
        <div className="content">
            <form action={onSubmit}>
                <Input value={filmeEdit.titulo} onChange={(e) => handleFieldChange("titulo", e.target.value)} name="titulo" label="Título do filme" placeholder="Harry Potter" />
                <Input value={filmeEdit.sinopse} onChange={(e) => handleFieldChange("sinopse", e.target.value)} name="sinopse" label="Sinopse" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi." typeInput="textarea" />
                <Input value={filmeEdit.diretor} onChange={(e) => handleFieldChange("diretor", e.target.value)} name="diretor" label="Diretor" placeholder="Harry Potter" />
                <Input value={filmeEdit.duracao} onChange={(e) => handleFieldChange("duracao", e.target.value)} name="duracao" label="Duração" placeholder="2h 14m" />
                <Input value={filmeEdit.dataEstreia} onChange={(e) => handleFieldChange("dataEstreia", e.target.value)} name="dataEstreia" label="Data de Estreia" placeholder="21/12/2003" type="date" />
                <Input value={filmeEdit.caminhoBanner} onChange={(e) => handleFieldChange("caminhoBanner", e.target.value)} name="caminhoBanner" label="Caminho da imagem" typeInput="select" options={imagensBanner} />
                <Input value={filmeEdit.faixaEtaria} onChange={(e) => handleFieldChange("faixaEtaria", e.target.value)} name="faixaEtaria" label="Faixa Etária" placeholder="18" type="number" />
                <Input value={filmeEdit.idCategoria} onChange={(e) => handleFieldChange("idCategoria", e.target.value)} name="idCategoria" label="Categoria" placeholder="Aventura" type="number" />
                <Button type="button">
                    <Image src={iconAdd} alt="" />
                    Atualizar
                </Button>
            </form>
            <div className="box-slide-image">
                <p>Arraste a imagem do filme</p>
            </div>
        </div>
    )
}
