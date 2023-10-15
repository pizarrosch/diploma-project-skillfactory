import Layout from "@/layout/layout";
import s from "../../public/styles/login.module.scss";
import st from '../../public/styles/mainPage.module.scss';
import Image from "next/image";
import keyCarriers from '../../public/assets/people-carry-key.svg';
import keyLock from '../../public/assets/key-lock.svg';
import googleSign from '../../public/assets/google-sign.png';
import facebookSign from '../../public/assets/facebook-sign.png';
import yandexSign from '../../public/assets/yandex-sign.png';

export default function Login() {
    return (
        <Layout>
            <div className={s.root}>
                <div>
                    <div>
                        <p className={s.paragraph}>Для оформления подписки <br/> на тариф, необходимо <br/> авторизоваться.</p>
                        <Image className={s['key-carriers-img']} src={keyCarriers} alt='keyCarriers' />
                    </div>
                </div>
                <Image className={s['key-lock']} src={keyLock} alt='key lock'/>
                <div className={s['login-form-container']}>
                    <div className={s['login-signup-container']}>
                        <span className={s['login-signup-container__login']}>Войти</span>
                        <span className={s['login-signup-container__signup']}>Зарегистрироваться</span>
                    </div>
                    <div className={s['form-container']}>
                        <form className={s['form-container__form']}>
                            <div className={s['form__email-input-container']}>
                                <label htmlFor='input'>Логин или номер телефона:</label>
                                <input className={s['form__input']} type="email" id="input"/>
                            </div>
                            <div className={s['form__password-input-container']}>
                                <label htmlFor='password'>Пароль</label>
                                <input className={s['form__input']} type="password" id="password"/>
                            </div>
                        </form>
                    </div>
                    <button type='submit' className={st.loginButton}>Войти</button>
                    <span><a style={
                        {
                            textDecoration: 'underline',
                            color: 'blue',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }
                    }>Восстановить пароль</a></span>
                    <div className={s['alternative-login']}>
                        <span style={{fontSize: '16px', color: 'rgba(148, 148, 148, 1)'}}>Войти через:</span>
                        <div className={s['account-name-container']}>
                            <div className={s['account-name']}>
                                <Image src={googleSign} alt='google' />
                            </div>
                            <div className={s['account-name']}>
                                <Image src={facebookSign} alt='facebook' />
                            </div>
                            <div className={s['account-name']}>
                                <Image src={yandexSign} alt='yandex' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}