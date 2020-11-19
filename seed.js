import mongoose from 'mongoose';
import Question from './models/question.js';

mongoose.connect('mongodb://localhost:27017/self', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function seedQuestion() {

  const m1 = new Question({
    nameTema: 'myzlo',
    question: 'Репер качёк с плохой дикцией?',
    answer: 'Джиган',
    variant: 'Тимати'
  });

  const m2 = new Question({
    nameTema: 'myzlo',
    question: 'Дополните строчку песни "Потому что есть ........... у тебя?',
    answer: 'Алешка',
    variant: 'Наличка'
  });

  const m3 = new Question({
    nameTema: 'myzlo',
    question: 'Что играет в 6 утра по федеральным каналам и не только?',
    answer: 'Гимн',
    variant: 'Сансара'
  });

  const m4 = new Question({
    nameTema: 'myzlo',
    question: 'Назовите певца ипользующий в своём псевдониме скрипт?',
    answer: 'Скриптонит',
    variant: 'Крид',
  });

  const mylt1 = new Question({
    nameTema: 'mylt',
    question: 'Какой предмет потерял ежик в тумане в одноименном мультфильме?',
    answer: 'Узелок',
    variant: 'Мунштук'
  });
  const mylt2 = new Question({
    nameTema: 'mylt',
    question: 'Какое животное превратилось в котенка в мультфильме «Котенок с улицы Лизюкова»?',
    answer: 'Бегемот',
    variant: 'Лев',
  });

  const mylt3 = new Question({
    nameTema: 'mylt',
    question: 'В каком мультфильме исполняется песня «Чунга-Чанга»?',
    answer: 'Катерок',
    variant: 'Шрек',
  });
  const mylt4 = new Question({
    nameTema: 'mylt',
    question: 'Как звали говорящего коня в серии мультьтфильмов про трех богатырей?',
    answer: 'Юлий',
    variant: 'Юрий',
  });
  const contrys1 = new Question({
    nameTema: 'countrys',
    question: 'Какую страну разделяет Эверест от Китая?',
    answer: 'Непал',
    variant: 'Камбоджи',
  });
  const contrys2 = new Question({
    nameTema: 'countrys',
    question: 'Назовите европейский город-столицу, созвучный с име­нем известной украинской певицы?',
    answer: 'София',
    variant: 'Лабода',
  });

  const contrys3 = new Question({
    nameTema: 'countrys',
    question: 'Очертания этой страны напоминают дракончика?',
    answer: 'Япония',
    variant: 'Филипины'
  });
  const contrys4 = new Question({
    nameTema: 'countrys',
    question: 'Выходцы из этой экваториальной страны держат первен­ство в марафонских дистанциях?',
    answer: 'Кения',
    variant: 'Шмения',
  });
  
   const questionArr = [m4, m3, m2, m1, mylt1, mylt2, mylt3, mylt4, contrys1, contrys2, contrys3, contrys4];
  Question.insertMany(questionArr);
}
seedQuestion();
