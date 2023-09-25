import Link from "next/link";

import './button.css';

export default function Button({children, ...props}) {
    return (
        <Link href="#" {...props} className="button">
            {children}
        </Link>
    )
}
