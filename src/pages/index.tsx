import Layout from "@/layout/layout";
import Image from "next/image";
import bgImage1 from '../../public/assets/Image 1.png';
import stopWatch from '../../public/assets/stop-watch.svg';
import magnifyingGlass from '../../public/assets/magnifying-glass.svg';
import shield from '../../public/assets/shield.svg';
import leftArrow from '../../public/assets/left-arrow.svg';
import rightArrow from '../../public/assets/arrow-right.svg';
import sittingMan from '../../public/assets/sitting-man.svg';
import lamp from '../../public/assets/lamp.svg';
import s from '../../public/styles/mainPage.module.scss';
import Card from "@/components/Card/Card";
import {ImgSource} from "@/types";
import TariffCard from "@/components/TariffCard/TariffCard";

const cardContents = [
    {
        src: stopWatch,
        text: 'Высокая и оперативная скорость \n обработки заявки'
    },
    {
        src: magnifyingGlass,
        text: 'Огромная комплексная база \n данных, обеспечивающая\n объективный ответ на запрос'
    },
    {
        src: shield,
        text: 'Защита конфеденциальных сведений, \n не подлежащих разглашению по \n федеральному законодательству'
    },
    {
        src: shield,
        text: 'Защита Ваших денег'
    }
]

export default function Home() {
    return (
        <Layout>
            <div className={s.publicationSearchContainer}>
                <div>
                    <div>
                        <p className={s.paragraph}>сервис по поиску <br/> публикаций  <br/> о компании <br/> по его ИНН</p>
                        <p style={{fontSize: '20px'}}>Комплексный анализ публикаций, получение данных <br/> в формате PDF на электронную почту.</p>
                    </div>
                    <button className={s.getDataByInnButton}>Запросить данные</button>
                </div>
                <Image src={bgImage1} alt='man pointing at the screen' />
            </div>
            <div>
                <p style={{fontSize: '45px'}} className={s.paragraph}>Почему именно мы</p>
                <div className={s.slider}>
                    <Image src={leftArrow} alt='left' />
                    <div className={s.cardsContainer}>
                        {
                            cardContents.map((cardContent: ImgSource) => {
                                return <Card src={cardContent.src} text={cardContent.text} />
                            })
                        }
                    </div>
                    <Image src={rightArrow} alt='right' />
                </div>
            </div>
            <Image src={sittingMan} alt='sittingMan' />
            <div>
                <p style={{fontSize: '45px'}} className={s.paragraph}>Наши тарифы</p>
                <div>
                    <TariffCard src={lamp} />
                </div>
            </div>
        </Layout>
    )
}