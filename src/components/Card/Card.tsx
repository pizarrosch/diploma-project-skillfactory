import Image from "next/image";
import {ImgSource} from "@/types";
import s from './Card.module.scss';

export default function Card({src, text}: ImgSource) {
    return (
        <div className={s.root}>
            <Image src={src} alt='' />
            <p>{text}</p>
        </div>
    )
}