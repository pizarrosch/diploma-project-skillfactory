import Image from "next/image";
import s from '../../../public/styles/mainPage.module.scss';
import st from './Tariff.module.scss';
import checkmark from '../../../public/assets/checkmark.svg';

export default function TariffCard({src}: {src: string}) {
    return (
        <div className={st.root}>
            <div className={st['tariff-title']}>
                <div>
                    <h2 className={st['tariff-title__title']}>Beginner</h2>
                    <span className={st['tariff-title__description']}>Для небольшого исследования</span>
                </div>
                <Image className={st['tariff-title__image']} src={src} alt='lamp' />
            </div>
            <div className={st['tariff-details-container']}>
                <div className={st['current-tariff-icon']}>Текущий тариф</div>
                <div className={st['price-container']}>
                    <span className={st['price-container__actual-price']}>799 ₽</span>
                    <span className={st['price-container__old-price']}>1 200 ₽</span>
                </div>
                <span style={{paddingLeft: '30px'}} className={st['eighteen-px-text']}>или 150 ₽/мес. при рассрочке на 24 мес.</span>
            </div>
            <div className={st['tariff-options']}>
                <h6 style={{fontSize: '20px', fontWeight: 500, marginBottom: '10px'}}>В тариф входит:</h6>
                <div className={st['tariff-options__option']}>
                    <Image src={checkmark} alt='checkmark' />
                    <span className={st['eighteen-px-text']}>Безлимитная история запросов</span>
                </div>
                <div className={st['tariff-options__option']}>
                    <Image src={checkmark} alt='checkmark' />
                    <span className={st['eighteen-px-text']}>Безопасная сделка</span>
                </div>
                <div className={st['tariff-options__option']}>
                    <Image src={checkmark} alt='checkmark' />
                    <span className={st['eighteen-px-text']}>Поддержка 24/7</span>
                </div>
            </div>
            <button className={s.seeDetailsButton}>Перейти в личный кабинет</button>
        </div>)
}