import colleague from '../../../../../assets/images/colleague-avatar.svg';
import player from '../../../../../assets/images/player.svg';
import { SEX_TYPES } from '../../../../../constants';

export const getPeopleInteractionMessages = (sex) => [
    {
        id: 'loc2_person0',
        sender: 'Коллега-стажер',
        avatar: colleague,
        color: 'green',
        text: 'У меня сразу после мастер-класса назначен созвон с\u00A0клиентом. ' +
            'Подготовил для\u00A0них большую презентацию о\u00A0том, как мы будем раскручивать ' +
            'их навороченные электрические зубные щетки.',
        delay: 0,
    },
    {
        id: 'loc2_person1',
        sender: 'Я',
        text: 'Всем привет! Что обсуждаете?',
        type: 'main',
        delay: 1000,
        avatar: player,
    },
    {
        id: 'loc2_person2',
        sender: 'Коллега-стажер',
        avatar: colleague,
        color: 'green',
        text: 'Привет! Я тут рассказываю коллеге про одного своего клиента. ' +
            `Кстати, ты знал${sex === SEX_TYPES.female ? 'а' : ''}, что у\u00A0нас все клиенты ` +
            'поделены на\u00A0пять основных категорий?',
        delay: 2000,
    }
];

export const getPeopleInteractionAnswerMessages = () => [
    {
        id: 'loc2_person4',
        sender: 'Я',
        text: 'Ого! А что за категории?',
        type: 'main',
        delay: 0,
        avatar: player,
    },
    {
        id: 'loc2_person5',
        sender: 'Коллега-стажер',
        avatar: colleague,
        color: 'green',
        text: 'Пять категорий — это товары, недвижимость, авто, услуги и\u00A0работа. ' +
            'У нас много клиентов малого бизнеса, но все они объединены общей целью — ' +
            'увеличить свою прибыль. Наша задача — научить их пользоваться нашей площадкой так, ' +
            'чтобы она приносила максимальную выгоду.',
        delay: 1000,
    }
];
