<template>
  <section class="examples">
    <div class="container">
      <h1>Примеры использования шрифта Times New Roman</h1>
      <div class="examples__content">
        <div class="examples__column">
          <p class="example__title text-l">Во-первых</p>
          <p class="example__text text-m">
            Все на данном сайте сделано данным шрифтом!<br />
            Каждую секунду, находясь здесь, вы лицезреете его.<br />
            Лаконичный. Привычный. Обычный.<br />
            Times New Roman!
          </p>
          <p class="example__title text-l">Во-вторых</p>
          <p class="example__text text-m">Газета “Times”</p>

          <picture class="example__img">
            <source
              srcset="../assets/images/examples/newspaper622px.jpg"
              media="(min-width: 768px)"
            />
            <img
              srcset="../assets/images/examples/newspaper290px.jpg"
              alt="times new roman newspaper"
            />
          </picture>
        </div>
        <div class="examples__column">
          <p class="example__title text-l">В-третьих</p>
          <p class="example__text text-m">Попробуйте сами!</p>
          <textarea
            class="example__textarea"
            placeholder="Ваш текст"
            @input="(evt) => (text = evt.target.value)"
          />

          <p class="example__text text-m">Выберите шрифт (8-72px):</p>

          <div class="range__slider">
            <input type="range" min="8" max="72" step="1" v-model="value" />
            <input type="number" v-model="value" />
            <p>{{ value }} px</p>
          </div>

          <p
            v-if="text"
            class="inputted-text"
            v-bind:style="{ fontSize: value + 'px' }"
          >
            {{ text }}
          </p>
          <p
            v-else
            class="inputted-text text-l"
            v-bind:style="{ fontSize: value + 'px' }"
          >
            Ваш текст
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      value: 32,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";
.examples__content {
  display: flex;
  width: 100%;
}
.examples__column {
  width: 50%;
  &:first-child {
    margin-right: 2em;
  }
}
.example__title {
  color: $bordo;
  margin-bottom: 0.25em;
}
.example__text {
  margin-bottom: 0.75em;
}
.example__img {
  display: block;
  margin-bottom: 0.75em;
  img {
    width: 100%;
    max-width: 622px;
    object-fit: cover;
  }
}
.example__textarea {
  width: 100%;
  height: 200px;
  font-size: 1.5em;
  color: $gray;
  border: none;
  border-radius: 5px;
  padding: 1em;
  resize: none;
  margin-bottom: 0.75em;
  &::placeholder {
    opacity: 0.5;
  }
}
.range__slider {
  display: flex;
  font-size: 1em;
  margin-bottom: 0.75em;

  input[type="range"] {
    margin-right: 2em;
    width: 200px;
    -webkit-appearance: none;
    background: transparent;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 18px;
    border-radius: 3px;
    background: $gray;
    cursor: pointer;
    margin-top: -10px;
  }

  input[type="range"]::-moz-range-thumb {
    height: 24px;
    width: 18px;
    border-radius: 3px;
    background: $gray;
    cursor: pointer;
  }

  input[type="range"]::-ms-thumb {
    height: 24px;
    width: 18px;
    border-radius: 3px;
    background: $gray;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;

    background: $gray;
    border-radius: 1.3px;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: $gray;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: $gray;
    border-radius: 1.3px;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: $gray;

    border-radius: 2.6px;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: $gray;
  }
  input[type="range"]::-ms-fill-upper {
    background: $gray;

    border-radius: 2.6px;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: $gray;
  }
  input[type="number"] {
    margin-right: 1em;
    width: 50px;
    color: $gray;
    padding-left: 4px;
  }
}
@media (max-width: 1440px) {
  .examples__content {
    flex-direction: column;
  }
  .examples__column {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .example__img img {
    width: auto;
  }
}
</style>