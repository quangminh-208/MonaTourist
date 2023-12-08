<script>
export default {
  props: {
    imgSlideUrl: {
      type: String,
      required: true
    },
    slide: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      isFirstSlide: false,
    }
  },
  methods: {
    onAddClass() {
      this.isFirstSlide = true
    }
  }
}
</script>

<template>
  <div class="slider__item" :class="{ 'first-slide': isFirstSlide }">
    <a>
      <img :src="`${imgSlideUrl}`" class="slider__item-img" />
    </a>
    <div class="container-xl">
      <div class="slider__item__content">
        <p class="slider__item__subheading">{{ slide.subheading }}</p>
        <p class="slider__item__heading">{{ slide.heading }}</p>
        <p class="slider__item__text">
          {{ slide.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.slider__item {
  width: 100%;
  position: relative;
  transition: all 0.5s ease;
}

.slider__item-img {
  width: 100vw;
}

.slider__item__content {
  width: 100%;
  height: 100%;
  color: var(--text-light-1);
  position: absolute;
  top: 0;
  transition: all 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slider__item__subheading {
  font-size: 2rem;
  font-weight: 500;
}

.slider__item__heading {
  font-size: 4rem;
  font-weight: 500;
  line-height: 1;
}

.slider__item__text {
  width: 40%;
  font-size: 1.2rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
