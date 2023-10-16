import s from './SearchForm.module.scss';

export default function SearchForm() {
    return (
        <div className={s.container}>
            <div>
                <form className={s['form-container']}>
                    <label htmlFor='inn'>ИНН компании*</label>
                    <input className={s.input} type='number' maxLength={10} id='inn'/>
                    <label htmlFor='selectTon'>Тональность</label>
                    <select className={s.input} id='selectTon'>
                        <option>Любая</option>
                    </select>
                    <label htmlFor='amount'>Количество документов в выдаче*</label>
                    <input className={s.input} type="number" max={1000} id='amount'/>
                    <label htmlFor='range'>Диапазон поиска*</label>
                    <input type='date' className={s['date-input']}/><input type='date' id='range' className={s['date-input']}/>
                </form>
            </div>
        </div>
    )
}