import { createStore } from 'vuex'
import article from './modules/article'

const store = createStore({
  modules: {
    article
  }
})

export default store;