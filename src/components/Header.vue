<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/images/logo.png" alt="" />
          </router-link>
        </div>
        <nav class="headerMenu">
          <ul>
            <li v-for="(link, index) in headerMenuLinks" :key="index">
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </nav>
        <button class="burger" type="button" @click="menuOpen = !menuOpen">
          <img src="../assets/images/icons/burger.svg" alt="" />
        </button>
      </div>
    </header>
    <div class="mobileMenu" :class="{ visible: menuOpen }">
      <ul>
        <li v-for="(link, index) in headerMenuLinks" :key="index">
          <router-link @click="menuOpen = !menuOpen" :to="link.path">{{
            link.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
      headerMenuLinks: [
        { name: "История", path: "/history" },
        { name: "Статьи", path: "/articles" },
        { name: "Примеры", path: "/examples" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";
header {
  background-color: $beige;
  padding: 1em 0;
  margin-bottom: 2em;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
a {
  font-size: 2em;
}
.logo img {
  width: 100%;
  object-fit: cover;
}
nav.headerMenu ul {
  display: flex;
  li {
    margin-left: 126px;
  }
}
.burger {
  display: none;
}
.mobileMenu {
  display: none;
  position: fixed;
  width: 100%;
  z-index: 10;
}
@media (max-width: 1600px) {
  header {
    padding: 2em 0;
  }
  nav.headerMenu ul {
    li {
      margin-left: 100px;
    }
  }
}
@media (max-width: 1440px) {
  header {
    padding: 1.4em 0;
  }
  a {
    font-size: 1.3em;
  }
  nav.headerMenu ul {
    li {
      margin-left: 34px;
    }
  }
}
@media (max-width: 768px) {
  header {
    padding: 1em 0;
  }
  .logo {
    width: 155px;
  }
  nav.headerMenu {
    display: none;
  }
  .burger {
    display: block;
  }
  .mobileMenu {
    display: block;
    height: 0px;
    text-align: center;
    background-color: $beige;
    transition: height 0.3s ease;
    overflow: hidden;
    ul {
      display: flex;
      flex-direction: column;
      padding-top: 57px;
      padding-bottom: 98px;
      li:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
  .mobileMenu.visible {
    height: 300px;
    transition: height 0.3s ease;
  }
}
@media (max-width: 475px) {
  header {
    margin-bottom: 1em;
  }
}
</style>
