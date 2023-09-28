import Link from "next/link";

//import './button.css';

export default function Button({children, ...props}) {
    return (
        <Link href="#" {...props} className="inline-flex items-center gap-3 px-5 py-1 rounded-lg border border-solid border-1 border-red-600 text-red-600 text-base font-light w-auto">
            {children}
        </Link>
    );
}
