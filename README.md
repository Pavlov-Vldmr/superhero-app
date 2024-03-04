# SuperHero APP

For all the superhero data you've needed.
Powerstats. Biography. Appearance. Work. Connections. Images.
From both the universe, and more.

- API [SuperHero API](https://superheroapi.com)

## Start project

```
npm install
npn run dev
```

## Требования к Проекту
<details>
  <summary>1 уровень (обязательный - необходимый минимум)</summary>

#### 
  
  - [ ]  Реализованы **Требования к функциональности.**
  - [ ]  Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**. [redux-persist](https://www.npmjs.com/package/redux-persist) библиотеку использовать **нельзя** из-за того, что привнесется большая автоматизация процесса сохранения, и это будет неравносильно затратам по времени других людей, которые используют LocalStorage напрямую.

#### React

  - [ ]  **Пишем функциональные компоненты c хуками** в приоритете над классовыми. (Классовый скорее всего у вас будет только один в котором будет реализация Error Boundaries. Это не значит, что можно забить на теорию классовых компонентов. Нет. Методы жизненного цикла - очень частый вопрос на выходном интервью. Прочую инфу по классовым компонентам тоже стоит пропустить через себя и усвоить)
  - [ ]  Есть разделение на **умные и глупые компоненты** (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0, перевод - https://habr.com/ru/post/266559/. Это пункт - лишь общая рекомендация. Обратите внимание на Update from 2019 по первой ссылке от Дэна. Поэтому не относитесь к этому пункту слишком серьезно. Он тут для того, чтобы вы знали, что существуют такие термины в комьюнити, и не растерялись на собесе, если в каком-то вопросе они прозвучат).
  - [ ]  Есть **рендеринг списков** (https://ru.reactjs.org/docs/lists-and-keys.html)
  - [ ]  Реализована хотя бы одна **форма** (https://ru.reactjs.org/docs/forms.html). Можно использовать UI kit библиотеку ([MUI](https://mui.com/), [AntDesign](https://ant.design/), [ChakraUI](https://chakra-ui.com/) и т.п.), спец. библиотеку построения форм ([Formik](https://formik.org/), [React Hook Form](https://react-hook-form.com/) и т.п.).
  - [ ]  Есть применение **Контекст API** (https://ru.reactjs.org/docs/context.html). Да, вроде бы у нас есть ридакс, зачем тогда нам контекст? Помните, что мы лишь трогаем и играемся со всякой апишкой реакта. Да и использование этих инструментов одновременно - это дискуссионный вопрос. Где-то это уместно, где-то не особо. Всему своё место. Если не знаете, где применить в своем приложении, делайте *темную/светлую тему*. Достаточно цвет шапки или кнопку перекрашивать. Не нужно глобально делать темный/светлый дизайн всего приложения и тратить на это время.
  - [ ]  Есть применение **предохранителя** (https://ru.reactjs.org/docs/error-boundaries.html). Можно и свой написать, можно и пакет [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) заюзать. Главное, чтобы вы понимали что это и зачем.
  - [ ]  Есть хотя бы один **кастомный хук** (https://ru.reactjs.org/docs/hooks-custom.html). Какой-нибудь useActions внутри которого bindActionCreators - не засчитаю. Хук должен быть чуть масштабнее. useDebounce - уже лучше, но вдруг вы его бездумно взяли из интернета. Так что лучше несмотря на useDebounce, был ещё какой-нибудь кастомный хук.
  - [ ]  Хотя бы несколько компонентов используют **PropTypes** (https://ru.reactjs.org/docs/typechecking-with-proptypes.html). Если пишите на TS, всё равно добавьте на 2, 3 компонента PropTypes, чтобы закрыть этот пункт.
  - [ ]  Поиск не должен триггерить много запросов к серверу (**debounce**) (https://ru.reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row). Использовать useDebounce из интернета - ок.
  - [ ]  Есть применение **lazy + Suspense** (https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting)

#### Redux

  - [ ]  Используем **Modern Redux with Redux Toolkit** (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
  - [ ]  Используем **слайсы** (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice)
  - [ ]  Есть хотя бы одна **кастомная мидлвара** (**[store ⇒ next ⇒ action ⇒ {}](https://redux.js.org/understanding/history-and-design/middleware)** или **`[createListenerMiddleware](https://redux-toolkit.js.org/api/createListenerMiddleware)`** )
  - [ ]  Используется **RTK Query** (https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
  - [ ]  Используется **Transforming Responses** (https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#transforming-responses). Если у вас такая апишка, что особо “готовить” в данных нечего, то будет достаточно простой функции, которая залезет в свойство ответа от сервера. Что-то типа response ⇒ response.results, в зависимости как ваша апишка данные вам отдаёт. Это лишь пример. Главное в этом пункте знать, что есть такая вот штука - transformResponse.
      
</details>

<details>
  <summary>2 уровень (необязательный)</summary>
  
  - [ ]  Использование **TypeScript** (https://ru.reactjs.org/docs/static-type-checking.html#typescript)

    - Можете опираться на популярные сборники советов. Например, **[React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)**.
    - Если с АПИ прилетает куча данных, не нужно на них всех описывать типы. Добавьте типы только на то, что вы используете в приложении.
    - По-хорошему, все функции на преобразование данных или какие-то вычисления должны иметь **тип возвращаемого значения**. Так вы добавите контроль за выходными данными.
    - Как покрывать **мидлвару**, созданную через createListenerMiddleware описано [тут](https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage).


  - [ ]  Подключен **storybook** и созданы два, три сториса с [controls](https://storybook.js.org/docs/essentials/controls), которые показывают разные состояния компонента (https://storybook.js.org/).
  - [ ]  Использование **Firebase** для учетных записей пользователей и их Избранного и Истории поиска. Тогда пункт из обязательных требований про использования LocalStorage может отпадать за ненадобностью, раз вы используете Firebase. [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks/tree/master) использовать **нельзя**, чтобы не перепрыгивать базовое API firebase в рамках изучения.
  - [ ]  Обновление информации из Firebase через инвалидацию кеша RTK Query. Если обновление будет выстроено таким образом, накину ещё дополнительные баллы в оценке за использование Firebase. Пункт новый и необкатанный, так что если найдете противоречие в реализации, приходите в личку.
    - Можно для этого пункта взять не Firebase, а Свой простой самописный сервер на ноде + mongoDB, если вы больше заинтересованы потыкать монго, а не фаербейз. Насколько мне говорили ребята, mongoDB сервера не доступны из России. Но вы можете поднять себе БД локально.
  - [ ] Низкая связанность клиентского кода, использующего апи кода, работающего с внешним стором.
  - [ ] Настроен CI/CD
  - [ ] Реализована **виртуализация списков** (https://ru.legacy.reactjs.org/docs/optimizing-performance.html#virtualize-long-lists). Пусть в доке упоминается список в сотни или тысячи строк, в качестве эксперимента мы можем виртуализировать короткий список в приложении. Например при поиске единицы информации вы можете выводить результаты поиска через виртуализованный список. Можно использовать библиотеки. Этот пункт тут, потому что на собесе могут задать вопрос про это, в духе “Знаешь ли как можно эффективно рендерить большие списки или таблицы”.
  - [ ]  Используются **мемоизированные селекторы** (createSelector). Постарайтесь, чтобы был какой-то смысл в вашем селекторе, и это не было какой-то мапинг в духе, получили стейт, забрали из него свойство, возвратили его.
  - [ ]  Используется **нормализованная структура стейта** (createEntityAdapter). Что делать, если в вашей предметной области и данным никак нельзя применить нормализацию? - Можете создать либо отдельные   проект, либо прям в нашем проекте сделать нормализацию с другими данными (другой апишкой) в качестве эксперимента.
  - [ ]  Проведена **оптимизация приложения** (https://redux.js.org/tutorials/essentials/part-6-performance-normalization). Если хотите закрыть этот пункт, то вам придется доказать, что вы действительно что-то оптимизировали. Можно прикрепить запись экрана, как было до. Показать, что вы сделали. И показать, как стало после. Например, избавились от лишних ререндеров и тому подобное. Или мемоизированные селекторы примерили и этим сделали что-то лучше. В общем, немного размытый пункт, обычно его не сдают. Он тут скорее для того, чтобы подсветить статью в доке, которую можно использовать в ответе на вопрос на собесе “Как можно оптимизировать приложение?”.
  - [ ] Feature Flags. Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом. Это повсеместная практика на проектах, так что даже если не будете реализовывать это тут, хотя бы почитайте на будущее, что это такое - фича флаги.
  - [ ] Добавить тесты через jest, react-testing-library или Playwright или через что-то другое на ваше усмотрение. Связь UI и бизнес-логики построена не через команды, а через события. (https://redux.js.org/style-guide/#model-actions-as-events-not-setters, https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#designing-actions). Основная идея этого пункта: в Компонентах не должно быть связи с инфраструктурой. Компоненты должны сообщать о том, что что-то случилось (произошло событие), а инфраструктура на это реагировала. В целом, это должно помочь сделать Project Console API. Также этот пункт перекликается с требованием того, что из файлов компонентов нельзя вызывать апи localStorage/firebase напрямую.
  - [ ] Project Console API
    - Цель Предоставить пользователю Console API для работы с приложением.
    - Мотивация Демонстрация навыков построения архитектуры, в которой ядро приложения существует независимо от типа ввода/вывода (GUI, Console).
      
    - Суть
      - Ядро приложения не должно проникать в GUI.
      - Следовательно, при создании Console API не должно происходить дублирования бизнес-логики и поведения ещё и для Console API.
      - Всё, что ваше приложение способно сделать через GUI, оно должно уметь делать и через консоль [В рамках тренировки, хотя бы часть главных функций приложения: отобразить информацию, осуществить поиск, зарегистрироваться, добавить/удалить  избранное].
      - *То есть, еще раз, идея НЕ в том, чтобы найти кнопку на экране геттером и кодом кликнуть по ней. Идея в том, чтобы полноценно работать с приложением без рендеринга на экране, только в консоле, переиспользуя application core code, который также использует GUI.*   
  
</details>




### Frameworks, Platforms and Libraries

![React](https://img.shields.io/badge/-React-090909?style=for-the-badge&logo=react&logoColor=47C5FB)
![Redux](https://img.shields.io/badge/redux-090909.svg?style=for-the-badge&logo=redux&logoColor=8923B9)
![Vite](https://img.shields.io/badge/vite-090909.svg?style=for-the-badge&logo=vite&logoColor=B769D2)
![typeScript](https://img.shields.io/badge/-typeScript-090909?style=for-the-badge&logo=typeScript)

![html5](https://img.shields.io/badge/-HTML5-090909?style=for-the-badge&logo=html5)
![css3](https://img.shields.io/badge/-css3-090909?style=for-the-badge&logo=css3&logoColor=7acef4)
![MUI](https://img.shields.io/badge/MUI-090909.svg?style=for-the-badge&logo=mui&logoColor=3C50FE)

![npm](https://img.shields.io/badge/-NPM-090909?style=for-the-badge&logo=npm)
