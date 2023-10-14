import s from './Navigation.module.scss';

export default function Navigation() {
    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <ul className={s['navigation-list']}>
                    <li className={s['navigation-list__item']}>Главная</li>
                    <li className={s['navigation-list__item']}>Тарифы</li>
                    <li className={s['navigation-list__item']}>FAQ</li>
                </ul>
            </nav>
            <div className={s.loginMenu}>
                <span className={s.register}>Зарегистрироваться</span>
                <span className={s.separator}>|</span>
                <button className={s.loginButton}>Войти</button>
            </div>
        </div>
    )
}