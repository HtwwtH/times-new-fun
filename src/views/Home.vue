<template>
  <section class="home">
    <div class="container">
      <p class="text-xl">Официальный сайт шрифта</p>
      <h1 class="red-large">Times New Roman</h1>
      <div class="slogan">Лаконичный. Привычный. Обычный.</div>
      <div class="appeal__content">
        <p class="text-l">Уже захотели его?</p>
        <button class="bordo-btn">Скачать</button>
        <p class="text-m">
          Скачайте и установите в систему правым нажатием клавиши мыши -
          “установить” и пользуйтесь с наслаждением!
        </p>
      </div>
    </div>
    <picture class="home__img">
      <source srcset="../assets/images/main.png" />
    </picture>
    <img class="home__img" src="../assets/images/main.png" alt="" />
    <div class="watermark__container">
      <div class="watermark">
        made by Alina Povazhnyuk for fun<br />not commercial
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
h1 {
  margin-bottom: 0;
}
.home__img {
  width: 60%;
  max-width: 1345px;
  max-height: 896px;
  object-fit: contain;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.slogan {
  max-width: 406px;
  margin-bottom: 100px;
}
.appeal__content {
  max-width: 406px;
  p:first-child,
  button {
    margin-bottom: 1em; //8px
  }
}
@media (max-width: 1600px) {
  .home__img {
    max-height: 673px;
  }
}
@media (max-width: 768px) {
  .slogan {
    margin-bottom: 47px;
  }
  .appeal__content {
    max-width: 406px;
    p:first-child,
    button {
      margin-bottom: 0.5em; //8px
    }
  }
  .home__img {
    object-fit: cover;
    width: 100%;
    min-height: 386px;
  }
}
@media (max-width: 475px) {
  .home {
    text-align: center;
  }
  .slogan {
    margin-bottom: 1em;
    max-width: 100%;
  }
  .appeal__content {
    max-width: 100%;
    button {
      margin: 0 auto 0.5em;
    }
  }
  .home__img {
    min-height: 306px;
  }
}
</style>
