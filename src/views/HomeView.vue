<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import SliderSection from '../components/SliderSection.vue'
import ProductBox from '../components/ProductBox.vue'
import ProductList from '../components/ProductList.vue'
import ProductOptionSection from '../components/ProductOptionSection.vue'
import NewsSection from '../components/NewsSection.vue'
import RegisterMailSection from '../components/RegisterMailSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <HeaderSection />
  <SliderSection />
  <div class="container-xl">
    <ProductBox />
    <div class="best-seller__head">
      <span>Sản phẩm bán chạy</span>
      <div class="best-seller__head-nav">
        <button class="best-seller__btn">
          <font-awesome-icon icon="fa-solid fa-angle-up" rotation="270" />
        </button>
        <button class="best-seller__btn">
          <font-awesome-icon icon="fa-solid fa-angle-up" rotation="90" />
        </button>
      </div>
    </div>
    <ProductList :number0fProduct="4" />
    <ProductBox />
    <ProductOptionSection />
    <NewsSection />
    <RegisterMailSection />
  </div>
  <FooterSection />
</template>

<style lang="css" scoped>
/* Best seller */
.best-seller__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
}

.best-seller__head > span {
  font-size: 2rem;
  font-weight: 500;
}
.best-seller__btn {
  width: 50px;
  height: 50px;
  color: var(--divider-dark-1);
  font-size: 2.4rem;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 10px;
  line-height: 50px;
}
.best-seller__btn:hover {
  background-color: var(--primary-dark-color);
}
</style>
