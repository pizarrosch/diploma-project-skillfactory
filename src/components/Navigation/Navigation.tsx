import s from './Navigation.module.scss';
import Link from "next/link";

export default function Navigation() {
    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <ul className={s['navigation-list']}>
                        <li className={s['navigation-list__item']}>
                            <Link href={'/'}>
                            Главная
                            </Link>
                        </li>
                    <li className={s['navigation-list__item']}>Тарифы</li>
                    <li className={s['navigation-list__item']}>FAQ</li>
                </ul>
            </nav>
            <div className={s.loginMenu}>
                <span className={s.register}>Зарегистрироваться</span>
                <span className={s.separator}>|</span>
                <button className={s.loginButton}>
                    <Link href={'/login'}>
                        Войти
                    </Link>
                </button>
            </div>
        </div>
    )
}