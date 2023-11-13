import player from "../../../../../assets/images/player.svg";
import playerF from "../../../../../assets/images/playerF.svg";
import speaker from "../../../../../assets/images/speaker.svg";
import { SEX_TYPES } from "../../../../../constants";

const questionsMessages = {
  1: {
    question: "А зачем нужно оформлять профиль?",
    answer:
      "Оформление профиля продавца и\u00A0карточек товаров напрямую влияет на то, " +
      "захочет человек сделать покупку или нет. Согласитесь, то, что красиво оформлено, " +
      "всегда притягивает взгляд.",
  },
  2: {
    question: "Но что делать, если у\u00A0клиента много конкурентов?",
    answer:
      "Выделить товары клиента среди всех остальных, " +
      "конечно! Например, клиент может настроить замену " +
      "объявлений конкурентов на\u00A0свои. Тогда в\u00A0блоках рекомендаций на\u00A0карточках " +
      "объявлений будут показаны только его предложения.",
  },
  3: {
    question: "А что делать с\u00A0диванами?",
    answer:
      "Что ты имеешь в виду? На\u00A0диванах можно сидеть, лежать, " +
      "пить кофе, работать. Еще их можно продавать и\u00A0покупать. Диваны очень разносторонние!",
  },
};

export const getMessages = (question1, question2, sex) => [
  {
    id: "video_chat_0",
    sender: "Я",
    avatar: sex === SEX_TYPES.female ? playerF : player,
    type: "main",
    color: "blue",
    text: questionsMessages[question1]?.question,
    delay: 0,
  },
  {
    id: "video_chat_1",
    sender: "Спикер",
    avatar: speaker,
    color: "green",
    text: questionsMessages[question1]?.answer,
    delay: 600,
  },
  {
    id: "video_chat_2",
    sender: "Я",
    type: "main",
    avatar: sex === SEX_TYPES.female ? playerF : player,
    color: "blue",
    text: questionsMessages[question2]?.question,
    delay: 1400,
  },
  {
    id: "video_chat_3",
    sender: "Спикер",
    avatar: speaker,
    color: "green",
    text: questionsMessages[question2]?.answer,
    delay: 2000,
  },
];
