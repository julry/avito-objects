import vanya from "../../../../../assets/images/vanya.svg";
import sveta from "../../../../../assets/images/sveta.svg";
import player from "../../../../../assets/images/player.svg";
import playerF from "../../../../../assets/images/playerF.svg";
import kolya from "../../../../../assets/images/kolya.svg";
import intern from "../../../../../assets/images/intern.svg";
import { SEX_TYPES } from "../../../../../constants";

export const getPeopleInteractionMessages = () => [
  {
    id: "loc3_person0",
    avatar: vanya,
    text:
      "Классный был мастер-класс. Я сейчас занимаюсь ювелиркой, " +
      "мой клиент — «Shine Bright». Теперь знаю, что им предложить. А вы, кстати, над чем сейчас работаете?",
    delay: 0,
  },
  {
    id: "loc3_person1",
    text: "У меня стройматериалы «Пилим-сверлим», но\u00A0мы только начали работать. Общаемся пока.",
    delay: 500,
    avatar: sveta,
  },
  {
    id: "loc3_person2",
    avatar: intern,
    text:
      "Я работаю с магазином телефонов «Телефонотека». " +
      "Недавно подключили им базовый тариф c\u00A0расширенной статистикой.",
    delay: 1000,
  },
  {
    id: "loc3_person3",
    avatar: kolya,
    text: "А у тебя что за клиент?",
    delay: 1500,
  },
];

export const getAnswerMessages = (question, sex) => [
  {
    id: "loc3_person4",
    text:
      `Я сегодня начал${
        sex === SEX_TYPES.female ? "а" : ""
      } работать с\u00A0«Дивными диванами». ` +
      (question === "1"
        ? "Пока думаю, что им предложить."
        : "Может, кто-то с ними уже работал?"),
    type: "main",
    delay: 0,
    avatar: sex === SEX_TYPES.female ? playerF : player,
  },
  {
    id: "loc2_person5",
    avatar: kolya,
    text:
      question === "1"
        ? "Удачи тебе! Уверен, все получится!"
        : "Максим как-то рассказывал, что конкуренция на\u00A0диваны сейчас очень подскочила. " +
          "Наверное, это связано с\u00A0похолоданием. Многим сейчас нравится " +
          "лежать с\u00A0книжкой на\u00A0диване.",
    delay: 500,
  },
];
