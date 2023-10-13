import Head from 'next/head';
import Link from "next/link";
// import Navigation from "@/components/Navigation/Navigation";
import {PropsWithChildren} from "react";
import Image from "next/image";
import headerLogo from '../../public/assets/logo.svg';
import footerLogo from '../../public/assets/footer-logo.svg';
import Navigation from "@/components/Navigation/Navigation";
import s from './layout.module.scss';

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <div className={s.root}>
                <Head>
                    <title>Main Page</title>
                    <meta name="description" content="SkillFactory Next.js project"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <header className={s.header}>
                    <Link href='/'>
                        <Image src={headerLogo} alt='company logo'/>
                    </Link>
                    <Navigation/>
                </header>
                <main>{children}</main>
            </div>
            <footer className={s.footer}>
                <Image src={footerLogo} alt='company logo'/>
                <div className={s.contactsDataContainer}>
                    <div className={s.contactsData}>
                        <span>г. Москва, Цветной б-р, 40</span>
                        <span>+7 495 771 21 11</span>
                        <span>info@skan.ru</span>
                    </div>
                    <span className={s.copyright}>Copyright. 2022</span>
                </div>
            </footer>
        </>
    )
}