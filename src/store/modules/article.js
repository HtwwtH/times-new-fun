import axios from "axios";
export default {
  actions: {
    async fetchArticleById(ctx, id) {
      console.log('call article ' + id)
    },
    async fetchArticles(ctx, id) {
      axios.get("../articles.json").then((response) => {
        // this.articles = response.data.articles;
        ctx.commit('updateArticles', response.data.articles)
      });
    }
  },
  mutations: {
    updateArticles(state, articles) {
      state.articles = articles
    }
  },
  state() {
    return {
      articles: []
    }
  },
  getters: {
    articlesList(state) {
      return state.articles
    },
  },
}