import Link from "next/link";

import './input.css';

export default function Input({ label, register=()=>{}, nameSpace, typeInput = "input", options = [], erro, ...props }) {
    return (
        <div className="input-form">
            <p>{label}</p>
            {typeInput === "input" && (
                <input {...register(nameSpace)} {...props} />
            )}
            {typeInput === "textarea" && (
                <textarea {...props} />
            )}
            {typeInput === "select" && (
                <select {...props}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
            {erro && (
                <span className="message-erro">{erro}</span>
            )}
        </div>
    )
}
