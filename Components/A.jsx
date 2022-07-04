import Link from "next/link";
import React from "react";
import s from "../style/A.module.css"


const A = ({text, href}) => {
    return <Link href={href}>
        <a className={s.link}>{text}</a>
    </Link>
}

export default A