"use client"
import Link from "next/link"

type ButtonProps = {
    label: string;
    href: string;
    rel?: string;
};

const Button = ({label, href, rel}: ButtonProps) => {
    return(
        <div className="flex border-8 border-black rounded-[40px] bg-[#D9A462] font-extrabold">
            <Link rel={rel} className="text-4xl px-8 py-3" href={href}> 
                {label}
            </Link>

        </div>
    );
};

export default Button;