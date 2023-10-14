import Layout from "@/layout/layout";
import Image from "next/image";
import bgImage1 from '../../public/assets/Image 1.png';
import s from '../../public/styles/mainPage.module.scss';

export default function Home() {
    return (
        <Layout>
            <div className={s.publicationSearchContainer}>
                <div>
                    <div>
                        <p className={s.paragraph}>сервис по поиску <br/> публикаций  <br/> о компании <br/> по его ИНН</p>
                        <p style={{fontSize: '20px'}}>Комплексный анализ публикаций, получение данных <br/> в формате PDF на электронную почту.</p>
                    </div>
                    <button className={s.getDataByInn}>Запросить данные</button>
                </div>
                <Image src={bgImage1} alt='man pointing at the screen' />
            </div>
            <div>
                <p style={{fontSize: '45px'}} className={s.paragraph}>Почему именно мы</p>
            </div>
        </Layout>
    )
}