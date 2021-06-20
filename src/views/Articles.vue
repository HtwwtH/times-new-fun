<template>
  <section class="articles">
    <div class="container">
      <h1>Статьи про Times New Roman</h1>
      <div v-for="article in articles" :key="article.id" class="article">
        <router-link
          :to="{
            name: 'Article',
            params: { id: article.id },
          }"
        >
          <img class="article__img" :src="articleImage(article.image)" alt="" />
        </router-link>
        <div class="article__description">
          <router-link
            :to="{ name: 'Article', params: { id: article.id } }"
            class="article__title text-l"
          >
            {{ article.title }}
          </router-link>
          <p class="article__date text-s">{{ article.date }}</p>
          <p class="article__short text-m" v-html="article.shortText"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    articles() {
      return this.$store.getters.articlesList;
    },
  },
  mounted() {
    // this.$store.dispatch("fetchArticles");
    this.fetchArticles();
  },
  methods: {
    ...mapActions(["fetchArticles"]),
    articleImage(filename) {
      return require(`../assets/images/articles/${filename}`);
    },
  },
};
</script>

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
