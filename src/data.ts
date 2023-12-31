import stopWatch from "../public/assets/stop-watch.svg";
import magnifyingGlass from "../public/assets/magnifying-glass.svg";
import shield from "../public/assets/shield.svg";
import lamp from '../public/assets/lamp.svg';
import goal from '../public/assets/dart.svg';
import laptop from '../public/assets/laptop.svg';

export const cardContents = [
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

export const tariffCardContents = [
    {
        tariffTitle: 'Beginner',
        tariffDescription: 'Для небольшого исследования',
        actualPrice: '799 ₽',
        oldPrice: '1200 ₽',
        monthlyRate: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        tariffOptions: {
            firstOption: 'Безлимитная история запросов',
            secondOption: 'Безопасная сделка',
            thirdOption: 'Поддержка 24/7'
        },
        backgroundColor: 'rgba(255, 182, 79, 1)',
        color: '',
        src: lamp
    },
    {
        tariffTitle: 'Pro',
        tariffDescription: 'Для HR и фрилансеров',
        actualPrice: '1299 ₽',
        oldPrice: '2600 ₽',
        monthlyRate: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        tariffOptions: {
            firstOption: 'Все пункты тарифа Beginner',
            secondOption: 'Экспорт истории',
            thirdOption: 'Рекомендации по приоритетам'
        },
        backgroundColor: 'rgba(124, 227, 225, 1)',
        color: '',
        src: goal
    },
    {
        tariffTitle: 'Business',
        tariffDescription: 'Для корпоративных клиентов',
        actualPrice: '2379 ₽',
        oldPrice: '3700 ₽',
        monthlyRate: '',
        tariffOptions: {
            firstOption: 'Все пункты тарифа Pro',
            secondOption: 'Безлимитное количество запросов',
            thirdOption: 'Приоритетная поддержка'
        },
        backgroundColor: 'rgba(0, 0, 0, 1)',
        color: 'white',
        src: laptop
    }
]