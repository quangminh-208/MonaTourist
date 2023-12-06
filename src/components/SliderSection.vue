<template>
  <div class="slider-wrapper">
    <div class="slider__main">
      <input type="radio" name="slider-radio-btn" id="radio1" :checked="slideChecked === 1" />
      <input type="radio" name="slider-radio-btn" id="radio2" :checked="slideChecked === 2" />
      <input type="radio" name="slider-radio-btn" id="radio3" :checked="slideChecked === 3" />
      <div class="slider__item first-slide">
        <a>
          <img src="../assets/img/slide-1.jpg" class="slider__item-img" />
        </a>
        <div class="container-xxl">
          <div class="slider__item__content">
            <p class="slider__item__subheading">Mona Watch</p>
            <p class="slider__item__heading">Đồng hồ Classico</p>
            <p class="slider__item__text">
              Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho
              ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc,
              kích cỡ…
            </p>
          </div>
        </div>
      </div>
      <div class="slider__item">
        <a>
          <img src="../assets/img/slide-2.jpg" class="slider__item-img" />
        </a>
        <div class="container-xxl">
          <div class="slider__item__content">
            <p class="slider__item__subheading">Mona Watch</p>
            <p class="slider__item__heading">Đồng hồ Classico</p>
            <p class="slider__item__text">
              Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho
              ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc,
              kích cỡ…
            </p>
          </div>
        </div>
      </div>
      <div class="slider__item">
        <a>
          <img src="../assets/img/slide-3.jpg" class="slider__item-img" />
        </a>
        <div class="container-xxl">
          <div class="slider__item__content">
            <p class="slider__item__subheading">Mona Watch</p>
            <p class="slider__item__heading">Đồng hồ Classico</p>
            <p class="slider__item__text">
              Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho
              ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc,
              kích cỡ…
            </p>
          </div>
        </div>
      </div>
      <div class="slider__nav-auto">
        <div class="slider__nav-auto__btn slider__nav-auto__btn1"></div>
        <div class="slider__nav-auto__btn slider__nav-auto__btn2"></div>
        <div class="slider__nav-auto__btn slider__nav-auto__btn3"></div>
      </div>
    </div>
    <div class="slider__btn-wrapper slider__btn-left" @click="backSlide">
      <button class="slider__btn">
        <font-awesome-icon icon="fa-solid fa-angle-up" rotation="270" />
      </button>
    </div>
    <div class="slider__btn-wrapper slider__btn-right" @click="nextSlide">
      <button class="slider__btn">
        <font-awesome-icon icon="fa-solid fa-angle-up" rotation="90" />
      </button>
    </div>
    <div class="slider__nav-manual">
      <label for="radio1" class="slider__nav-manual__btn"></label>
      <label for="radio2" class="slider__nav-manual__btn"></label>
      <label for="radio3" class="slider__nav-manual__btn"></label>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      slide_index: 2,
      slideChecked: 1
    }
  },
  mounted() {
    // Create an interval that executes the 'autoSlide' function every 4 seconds
    this.intervalId = setInterval(this.nextSlide, 4000)
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId)
  },
  methods: {
    backSlide() {
      this.slideChecked = this.slide_index
      this.slide_index--
      if (this.slide_index < 1) this.slide_index = 3
    },
    nextSlide() {
      this.slideChecked = this.slide_index
      this.slide_index++
      if (this.slide_index > 3) this.slide_index = 1
    }
  }
}
</script>

<style lang="css" scoped>
.slider-wrapper {
  background-color: #222;
  width: 100%;
  aspect-ratio: 19 / 6;
  position: relative;
  display: flex;
  overflow: hidden;
}

.slider-wrapper:hover .slider__btn {
  display: block;
}

.slider-wrapper:hover .slider__btn-left {
  animation: moveLeftShort 0.3s linear;
}

.slider-wrapper:hover .slider__btn-right {
  animation: moveRightShort 0.3s linear;
}

.slider-wrapper input {
  display: none;
}

.slider__main {
  width: 100%;
  display: flex;
}

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
  color: var(--white-color);
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

.slider__btn-wrapper {
  height: 100%;
  position: absolute;
  top: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.slider__btn-wrapper:hover .slider__btn {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.slider__btn {
  width: 40px;
  aspect-ratio: 1/1;
  background: none;
  border-radius: 50%;
  border: 1px solid rgba(192, 192, 192, 0.6);
  color: #c0c0c0;
  margin: 0 24px;
  display: none;
  transition: all 0.2s ease;
  cursor: pointer;
  box-sizing: border-box;
}

.slider__btn:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.slider__btn i {
  font-size: 2.2rem;
}

.slider__btn-left i {
  margin-right: 3px;
}

.slider__btn-right i {
  margin-left: 3px;
}

.slider__btn-left {
  left: 0;
}

.slider__btn-right {
  right: 0;
}

@keyframes moveLeftShort {
  from {
    transform: translateX(30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes moveRightShort {
  from {
    transform: translateX(-30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slider__nav-manual {
  width: 100%;
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
}

.slider__nav-manual__btn {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  background-color: #c899794f;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.5s ease;
}

.slider__nav-manual__btn:hover {
  background-color: var(--primary-color);
  opacity: 0.8;
}

.slider__nav-manual__btn:not(:last-child) {
  margin-right: 8px;
}

#radio1:checked ~ .first-slide {
  margin-left: 0;
}

#radio2:checked ~ .first-slide {
  margin-left: -100%;
}

#radio3:checked ~ .first-slide {
  margin-left: -200%;
}

/* #radio1:checked ~ .slider__item .slider__item__content, 
#radio2:checked ~ .slider__item .slider__item__content, 
#radio3:checked ~ .slider__item .slider__item__content {
    animation: moveLeftShort .8s ease;
} */

.slider__nav-auto {
  width: 100%;
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
}

.slider__nav-auto__btn {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  opacity: 0.6;
  cursor: pointer;
}

.slider__nav-auto__btn:hover {
  background-color: var(--primary-color);
  opacity: 0.8;
}

.slider__nav-auto__btn:not(:last-child) {
  margin-right: 8px;
}

#radio1:checked ~ .slider__nav-auto .slider__nav-auto__btn1,
#radio2:checked ~ .slider__nav-auto .slider__nav-auto__btn2,
#radio3:checked ~ .slider__nav-auto .slider__nav-auto__btn3 {
  background-color: var(--primary-color);
}
</style>
