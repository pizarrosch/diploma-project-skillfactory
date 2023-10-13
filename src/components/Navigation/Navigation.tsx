import s from './Navigation.module.scss';

export default function Navigation() {
    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <ul className={s['navigation-list']}>
                    <li>Главная</li>
                    <li>Тарифы</li>
                    <li>FAQ</li>
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