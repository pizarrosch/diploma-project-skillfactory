import Head from 'next/head';
import Link from "next/link";
// import Navigation from "@/components/Navigation/Navigation";
import {PropsWithChildren} from "react";
import Image from "next/image";
import logo from '../../public/assets/logo.svg';
import Navigation from "@/components/Navigation/Navigation";
import s from './layout.module.scss';

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Head>
                <title>Main Page</title>
                <meta name="description" content="SkillFactory Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header className={s.header}>
                <Link href='/'>
                    <Image src={logo} alt='company logo' />
                </Link>
                <Navigation />
            </header>
            <main>{children}</main>
        </>
    )
}