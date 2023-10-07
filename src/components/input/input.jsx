import Link from "next/link";

import './input.css';

export default function Button({ label, typeInput = "input", erro, ...props }) {
    return (
        <div className="input-form">
            <p>{label}</p>
            {typeInput === "input" ?
                <input {...props} />
                :
                <textarea {...props} />
            }
            {erro && (
                <span className="message-erro">{erro}</span>
            )}
        </div>
    )
}
