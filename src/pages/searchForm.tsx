import s from '../../public/styles/searchForm.module.scss';
import Layout from "@/layout/layout";
import SearchForm from "@/components/SearchForm/SearchForm";

export default function search() {
    return (
        <Layout>
            <div className={s.root}>
                <div>
                    <p className={s.paragraph}>Найдите необходимые <br/> данные в пару кликов.</p>
                    <p className={s.text}>Задайте параметры поиска. <br/> Чем больше заполните, тем точнее поиск</p>
                    <SearchForm />
                </div>
            </div>
        </Layout>
    )
}