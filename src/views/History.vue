<template>
  <section class="history">
    <div class="container">
      <h1>История шрифта Times New Roman</h1>
      <div class="history__content">
        <transition name="slide-from-left" appear>
          <div class="history__person morrison">
            <div class="person__card">
              <picture class="person__img">
                <source
                  srcset="../assets/images/history/morrison.png"
                  media="(min-width: 1440px)"
                />
                <img
                  srcset="../assets/images/history/morrisonmin.png"
                  alt="Stanley Morrison"
                />
              </picture>
              <p class="person__name">Стэнли Морисон</p>
            </div>
            <p class="person__speech">
              Здравствуйте, судари. Я пришел в газету “Таймс”, чтобы
              проконсультировать вас по типографике. На дворе 1931й год, время
              инноваций, нужен новый шрифт! Сделаем более удобочитаемым и
              сэкономим пространство.
            </p>
          </div>
        </transition>
        <transition name="slide-from-right" appear>
          <div class="history__person lardent">
            <div class="person__inner">
              <p class="person__speech">
                Здравствуйте, сэр. Я художник. Готов взять в работу.
              </p>
              <div class="person__card">
                <picture class="person__img">
                  <source
                    srcset="../assets/images/history/lardent.png"
                    media="(min-width: 1440px)"
                  />
                  <img
                    srcset="../assets/images/history/lardentmin.png"
                    alt="Viktor Lardent"
                  />
                </picture>
                <p class="person__name">Виктор Лэрдент</p>
              </div>
            </div>
          </div>
        </transition>
        <p class="text-m">
          Так, под руководством С.Морисона начался проект по созданию нового
          шрифта. Короткие выносные элементы уменьшили интерлиньяж, а сильный
          контраст штрихов улучшил читаемость на дешёвой бумаге.<br />Полученный
          шрифт получил название Times New Roman. Впервые был использован
          газетой Times 3 октября 1932 года, и уже через год стал использоваться
          для коммерческих продаж.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.slide-from-left-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-from-left-enter-from,
.slide-from-left-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-from-right-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-from-right-enter-from,
.slide-from-right-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.history__content {
  position: relative;
}
.history__person {
  position: relative;
  display: flex;
  &.morrison {
    left: 0;
    top: 0;
  }
  &.lardent {
    margin-top: -100px;
    margin-bottom: 74px;
  }
}
.person__speech {
  font-size: 1.5em;
  background: white;
  border-radius: 6px;
  padding: 1em;
  height: fit-content;
}
.morrison .person__speech {
  max-width: 998px;
  margin-left: 36px;
  margin-top: 32px;
}
.lardent .person__inner {
  display: flex;
  margin-left: auto;
}
.lardent .person__speech {
  max-width: 548px;
  margin-top: 94px;
  position: relative;
  left: 48px;
}
.person__name {
  text-align: center;
  font-size: 1.5em;
}
@media (max-width: 1440px) {
  .person__speech {
    font-size: 1em;
  }
  .history__person {
    &.lardent {
      margin-top: -50px;
      margin-bottom: 64px;
    }
  }
  .morrison .person__speech {
    margin-left: 18px;
  }
  .lardent .person__speech {
    max-width: 271px;
    margin-top: 64px;
    left: 32px;
  }
  .person__name {
    font-size: 1em;
  }
}
@media (max-width: 768px) {
  .history__person {
    &.lardent {
      margin-top: 0;
      margin-bottom: 36px;
    }
  }
}
@media (max-width: 475px) {
  .history__person {
    &.lardent {
      margin-top: 18px;
      margin-bottom: 32px;
    }
  }
  .person__speech {
    padding: 0.75em;
  }
  .morrison .person__speech {
    margin-left: 2px;
    margin-top: 0;
  }
}
</style>
