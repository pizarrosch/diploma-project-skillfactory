import Layout from "@/layout/layout";
import Image from "next/image";
import bgImage1 from '../../public/assets/Image 1.png';
import leftArrow from '../../public/assets/left-arrow.svg';
import rightArrow from '../../public/assets/arrow-right.svg';
import sittingMan from '../../public/assets/sitting-man.svg';
import s from '../../public/styles/mainPage.module.scss';
import Card from "@/components/Card/Card";
import {ImgSource} from "@/types";
import TariffCard from "@/components/TariffCard/TariffCard";
import {cardContents} from '@/data';
import {tariffCardContents} from '@/data';
import {TTariffCard} from "@/types";
import Link from "next/link";

export default function Home() {
    return (
        <Layout>
            <div className={s.publicationSearchContainer}>
                <div>
                    <div>
                        <p className={s.paragraph}>сервис по поиску <br/> публикаций <br/> о компании <br/> по его ИНН
                        </p>
                        <p style={{fontSize: '20px'}}>Комплексный анализ публикаций, получение данных <br/> в формате
                            PDF на электронную почту.</p>
                    </div>
                    <button className={s.getDataByInnButton}>
                        <Link href={'/searchForm'}>
                            Запросить данные
                        </Link>
                    </button>
                </div>
                <Image src={bgImage1} alt='man pointing at the screen'/>
            </div>
            <div>
                <p style={{fontSize: '45px'}} className={s.paragraph}>Почему именно мы</p>
                <div className={s.slider}>
                    <Image src={leftArrow} alt='left'/>
                    <div className={s.cardsContainer}>
                        {
                            cardContents.map((cardContent: ImgSource) => {
                                 return <Card src={cardContent.src} text={cardContent.text}/>
                            })
                        }
                    </div>
                    <Image src={rightArrow} alt='right'/>
                </div>
            </div>
            <Image src={sittingMan} alt='sittingMan'/>
            <div>
                <p style={{fontSize: '45px'}} className={s.paragraph}>Наши тарифы</p>
                <div className={s.tariffCardsContainer}>
                    {
                        tariffCardContents.map((tariffCard: TTariffCard) => {
                            return <TariffCard
                                tariffTitle={tariffCard.tariffTitle}
                                tariffDescription={tariffCard.tariffDescription}
                                actualPrice={tariffCard.actualPrice}
                                oldPrice={tariffCard.oldPrice}
                                monthlyRate={tariffCard.monthlyRate}
                                tariffOptions={{
                                    firstOption: tariffCard.tariffOptions.firstOption,
                                    secondOption: tariffCard.tariffOptions.secondOption,
                                    thirdOption: tariffCard.tariffOptions.thirdOption
                                }}
                                backgroundColor={tariffCard.backgroundColor}
                                color={tariffCard.color}
                                src={tariffCard.src}
                            />
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}