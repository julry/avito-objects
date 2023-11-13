import buddy from '../../../assets/images/buddy.svg';
import player from '../../../assets/images/player.svg';
import playerF from '../../../assets/images/playerF.svg';
import gosha from '../../../assets/images/gosha-avatar.svg';
import { TextDivider, TextSm, UnderlinedText } from '../../shared/texts';
import { SEX_TYPES } from '../../../constants';

export const getMessages = (name, sex) => (
    [
        {
            id: 'loc1_0',
            sender: 'Наставник',
            avatar: buddy,
            text: () => (
                <TextSm>
                    Привет, {name}!
                    <TextDivider />
                    Поздравляю с{'\u00A0'}началом первого рабочего дня! А{'\u00A0'}у{'\u00A0'}меня
                    уже есть для тебя задание. Твой клиент — продавец очень красивых и{'\u00A0'}удобных диванов.
                    В{'\u00A0'}последнее время его продажи на{'\u00A0'}нашей платформе упали, и{'\u00A0'}нам кажется, что
                    ему нужна помощь. <UnderlinedText color={'green'}>Узнай, что случилось,
                    и{'\u00A0'}предложи решение этой проблемы.</UnderlinedText> Весь офис, коллеги и
                    {'\u00A0'}я в{'\u00A0'}твоем распоряжении. Мы в{'\u00A0'}тебя верим!
                </TextSm>
            ),
            type: 'interlocutor',
            color: 'green',
            delay: 100,
        },
        {
            id: 'loc1_1',
            sender: 'Я',
            text: 'Спасибо! Задача понятна. Можно сразу задать пару вопросов?',
            type: 'main',
            delay: 2000,
            avatar: sex === SEX_TYPES.female ? playerF : player,
        }
    ]
);

export const getQuestionMessages = (questionNumber, sex) => (
    [
        {
            id: 'loc1_2',
            sender: 'Наставник',
            avatar: buddy,
            color: 'green',
            text: 'Мне надо подготовиться к встрече, успею ответить только на\u00A0один вопрос. Давай встретимся позже и\u00A0еще поболтаем!',
        },
        {
            id: 'loc1_3',
            sender: 'Я',
            text: questionNumber === '1' ? 'Я могу обратиться за помощью к коллегам?' : 'Я буду работать только с продавцом диванов или у меня будут и другие клиенты?',
            type: 'main',
            delay: 0,
            avatar: sex === SEX_TYPES.female ? playerF : player,
        },
        {
            id: 'loc1_4',
            sender: 'Наставник',
            color: 'green',
            text: questionNumber === '1' ?
                'Найти решение задачи тебе необходимо самостоятельно, но\u00A0коллеги ' +
                'всегда рады помочь и\u00A0поделиться опытом! Помни, что\u00A0работа в\u00A0продажах — ' +
                'это на\u00A095%\u00A0переговоры. Причем не только с\u00A0клиентами, но\u00A0и\u00A0' +
                'с\u00A0другими специалистами твоего профиля.' :
                'Конечно, у\u00A0тебя будет несколько клиентов. ' +
                'Мы работаем со многими компаниями и\u00A0подбираем для них те ' +
                'продукты, которые помогут конкретно в\u00A0их случае. Здесь ты ' +
                'у\u00A0руля и\u00A0помогаешь клиентам строить их бизнес!',
            delay: 800,
        },
        {
            id: 'loc1_5',
            sender: 'Наставник',
            avatar: buddy,
            color: 'green',
            text: 'Все, мне пора, прости. Кстати, тебе может помочь Максим. Он как-то работал с\u00A0«Дивными диванами».',
            delay: 1200,
            marginTop: '5px',
        }
    ]
);


export const getPersonMessages = (sex) => [
    {
        id: 'loc1_person0',
        sender: 'Гоша коллега',
        avatar: gosha,
        color: 'red',
        text: 'Только что вернулся от\u00A0нашего массажиста. ' +
            'Теперь так хорошо себя чувствую, что готов выполнить все свои задачи на\u00A0месяц.',
        delay: 0,
    },
    {
        id: 'loc1_person1',
        sender: 'Я',
        text: 'Корпоративный массажист? Не хватает только спортзала.',
        type: 'main',
        delay: 1000,
        avatar: sex === SEX_TYPES.female ? playerF : player,
    },
    {
        id: 'loc1_person2',
        sender: 'Гоша коллега',
        avatar: gosha,
        color: 'red',
        text: 'Очень даже хватает. Мне нравится заниматься там йогой, например. А если не любишь йогу, можно устроить силовую тренировку. Попробуй как-нибудь!',
        delay: 2200,
    }
];
