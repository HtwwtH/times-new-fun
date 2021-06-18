<template>
  <section class="articles">
    <div class="container">
      <h1>Статьи про Times New Roman</h1>
      <div class="article">
        <img
          class="article__img"
          src="../assets/images/articles/article1.jpg"
          alt=""
        />
        <div class="article__description">
          <p class="article__title text-l">
            Новые стандарты написания курсовых работ: от чего студенты в ужасе
          </p>
          <p class="article__date text-s">10.05.2021</p>
          <p class="article__short text-m">
            Современные реалии диктуют новые правила работы над официальными
            документами.<br />Это коснулось и ГОСТов написания дипломных,
            курсовых работ...
          </p>
        </div>
      </div>
      <div class="article">
        <img
          class="article__img"
          src="../assets/images/articles/article2.jpg"
          alt=""
        />
        <div class="article__description">
          <p class="article__title text-l">
            Альтернативы шрифту Times New Roman
          </p>
          <p class="article__date text-s">25.03.2021</p>
          <p class="article__short text-m">
            Times Roman и Times New Roman — несвободные шрифты. Есть некоторые
            свободные метрически совместимые шрифты как альтернативы Times
            Roman...
          </p>
        </div>
      </div>
      <div class="article">
        <img
          class="article__img"
          src="../assets/images/articles/article3.jpg"
          alt=""
        />
        <div class="article__description">
          <p class="article__title text-l">
            Российским чиновникам запретили использовать шрифт Times New Roman
          </p>
          <p class="article__date text-s">15.03.2021</p>
          <p class="article__short text-m">
            Правообладатель Times New Roman и других популярных шрифтов запретил
            их использование в российских госучреждениях. Шрифты могут
            применяться на отдельном ПК или для печати документов, но их нельзя
            передавать с...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.article {
  display: flex;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
}
.article__img {
  width: 400px;
  margin-right: 32px;
  object-fit: cover;
}
.article__title {
  margin-bottom: 0.25em;
}
.article__date {
  margin-bottom: 1em;
}
@media (max-width: 1440px) {
  .article {
    flex-direction: column;
  }
  .article__img {
    width: 300px;
    margin-bottom: 0.5em;
  }
  .article__date {
    margin-bottom: 0.75em;
  }
}
@media (max-width: 475px) {
  .article__img {
    width: 100%;
    max-width: 300px;
  }
}
</style>
