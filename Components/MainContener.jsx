import React from 'react';
import Head from "next/head";
import s from "../style/index.module.scss";
import A from "./A";


const MainContener = ({children, keyWords}) => {
    return (
        <div>
            <Head>
                <meta keywords={"Zaxar/next/js" + keyWords}></meta>
                <title>BYM</title>
            </Head>
            <div className={s.navbar}>
                <div className={s.header}>
                    <A href={"/"} text={"Main"}/>
                    <A href={"/users"} text={"Users"}/>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default MainContener;