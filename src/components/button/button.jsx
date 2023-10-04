import Link from "next/link";

import './button.css';

export default function Button({children, type="link", ...props}) {
    return (
        (type === "link") ?
        <Link href="#" {...props} className="button">
            {children}
        </Link>
        :
        <button {...props} className="button">
            {children}
        </button>
    )
}
