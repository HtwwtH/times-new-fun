<template>
  <section class="article">
    <div class="container">
      <h1>{{ articles[articleId - 1].title }}</h1>
      <p class="article__date text-m">
        {{ articles[articleId - 1].date }}
      </p>
      <img :src="articles[articleId - 1].image" alt="" class="article__img" />
      <p class="article__text text-m" v-html="articles[articleId - 1].text"></p>
      <router-link to="/articles" class="goback-link text-l"
        >Вернуться к списку статей</router-link
      >
      <hr />
      <p class="text-l other">Другие статьи</p>
      <div class="other__content">
        <div
          v-for="(article, index) in otherArticles"
          :key="index"
          class="other__card"
        >
          <router-link
            :to="{ name: 'Article', params: { id: article.id } }"
            class="title text-m"
            ><img :src="article.image" alt="" class="image" />
          </router-link>
          <router-link
            :to="{ name: 'Article', params: { id: article.id } }"
            class="title text-m"
            >{{ article.title }}
          </router-link>
          <p class="date text-s">{{ article.date }}</p>
          <p class="text">{{ article.shortText }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from "../assets/images/articles/article1.jpg";
import image2 from "../assets/images/articles/article2.jpg";
import image3 from "../assets/images/articles/article3.jpg";
export default {
  data() {
    return {
      articleId: this.$route.params.id,
      articles: [
        {
          id: 1,
          title:
            "Новые стандарты написания курсовых работ: от чего студенты в ужасе",
          date: "10.05.2021",
          image: image1,
          shortText: `Современные реалии диктуют новые правила работы над официальными документами.
Это коснулось и ГОСТов написания дипломных, курсовых работ...`,
          text: `Правообладатель Times New Roman и других популярных шрифтов запретил их
        использование в российских госучреждениях. Шрифты могут применяться на
        отдельном ПК или для печати документов, но их нельзя передавать с
        компьютера на компьютер, а также использовать для создания электронных
        документов или программных продуктов. <br><br>Служащим российских госучреждений
        придется отказаться от использования распространенных шрифтов типа Times
        New Roman, Arial, Courier New и т. д. Компания Monotype Imaging, которой
        принадлежат права на данные шрифты, отказалась предоставить лицензии на
        их использование в российском ПО. В качестве причины компания указала
        санкции, введенные США против России. <br><br>В пособии российским чиновникам
        предлагается решить проблему, перейдя на российское ПО. При этом
        рекомендуется сменить и ОС, и пакет офисных программ. Служащим
        госучреждений советуют применять вместо шрифтов Monotype Imaging
        российские шрифты или зарубежные, но распространяющиеся по открытой
        лицензии.`,
        },
        {
          id: 2,
          title: "Альтернативы шрифту Times New Roman",
          date: "25.03.2021",
          image: image2,
          shortText: `Times Roman и Times New Roman — несвободные шрифты. Есть некоторые свободные метрически совместимые шрифты как альтернативы Times Roman...`,
          text: `Times Roman и Times New Roman — несвободные шрифты. Есть некоторые свободные метрически совместимые шрифты как альтернативы Times Roman и Times New Roman или используемые для замены шрифтов:<br><br>

- URW++ выпустила версию Times New Roman под названием Nimbus Roman в 1982 году. Nimbus Roman №9 L, URW PostScript вариант, был выпущен под GNU General Public License в 1996 году и доступен в бесплатных и операционных системах с открытым кодом. Был позже адаптирован как FreeSerif. Как и для Times New Roman, существует множество дополнительных стилей Nimbus Roman, которые продаются только в коммерческих целях, включая конденсированные и сверх-широкие стили. URW также разработан Nimbus Roman № 4, который метрически совместим с несколько другим CG Times.<br><br>
- Liberation Serif метрически эквивалентен Times New Roman. Он был разработан Ascender Corp. и издан Red Hat в 2007 году по лицензии GPL с некоторыми исключениями. Используется в некоторых дистрибутивах GNU/Linux в качестве замены шрифта по умолчанию для Times New Roman.<br><br>
- Шрифт Tinos от компании Google в пакете шрифтов Croscore произошёл от расширения Liberation Serif, также разработан Стивом Маттесоном.<br><br>
- Bitstream Cyberbit — шрифт, выпущенный компанией Bitstream для некоммерческого использования, для европейских алфавитов и основан на Times New Roman. Он имеет расширенный диапазон символов, предназначенных для того, чтобы покрыть большую часть Unicode для научного использования. Bitstream уже не распространяет шрифт, но он может быть получен от Университета Франкфурта.<br><br>
- В сентябре 2016 года компаниями АО «НПО РусБИТех» (разработчик операционных систем «Astra Linux» ) и ООО НПП «ПараТайп» (разработчик общенациональных шрифтов ) были представлены общедоступные шрифты: PT Astra Sans и PT Astra Serif, метрически совместимые (аналоги) с Times New Roman.`,
        },
        {
          id: 3,
          title:
            "Российским чиновникам запретили использовать шрифт Times New Roman",
          date: "15.03.2021",
          image: image3,
          shortText: `Правообладатель Times New Roman и других популярных шрифтов запретил их использование в российских госучреждениях. Шрифты могут применяться на отдельном ПК или для печати документов, но их нельзя передавать с...`,
          text: `Современные реалии диктуют новые правила работы над официальными документами.<br>
Это коснулось и ГОСТов написания дипломных, курсовых работ.<br><br>

Университеты требуют использовать отечественные шрифты: liberation serif, PT Astra.<br><br>

Но у данных шрифтов меньше межбуквенный интервал, чем у Times New Roman, что сокращает
количество текста в работе в 1.5 раза!`,
        },
      ],
    };
  },
  computed: {
    otherArticles: function () {
      return this.articles.filter((el) => el.id != this.articleId);
    },
  },
  created: function () {
    window.scrollTo(0, 0);
  },
  watch: {
    "$route.params.id"() {
      this.articleId = this.$route.params.id;
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 0;
}
.article__date {
  margin-bottom: 2em;
}
.article__img {
  float: right;
  margin-left: 1em;
}
.article__text {
  margin-bottom: 1.5em;
}
.goback-link {
  margin-bottom: 1.5em;
}
.other {
  margin-bottom: 1em;
}
.other__content {
  display: flex;
}
.other__card {
  width: 35%;
  &:not(:last-child) {
    margin-right: 2em;
  }
  .image {
    width: 100%;
    max-width: 300px;
    margin-bottom: 0.25em;
  }
  .title {
    margin-bottom: 0.25em;
  }
  .date {
    margin-bottom: 0.75em;
  }
}
@media (max-width: 1440px) {
  .article__img {
    width: 300px;
    margin-bottom: 0.5em;
  }
}
@media (max-width: 768px) {
  .other__content {
    flex-direction: column;
  }
  .other__card {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 2em;
    }
  }
}
@media (max-width: 475px) {
  .article__date {
    margin-bottom: 1em;
  }
  .article__img {
    float: none;
    margin-left: 0;
    width: 100%;
    max-width: 300px;
  }
}
</style>