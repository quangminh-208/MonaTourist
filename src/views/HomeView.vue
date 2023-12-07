<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import SliderSection from '../components/SliderSection.vue'
import ProductBox from '../components/ProductBox.vue'
import ProductList from '../components/ProductList.vue'
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
    <div class="p-option__wrapper">
      <input type="radio" name="po-btn" id="p-option__input1" checked />
      <input type="radio" name="po-btn" id="p-option__input2" />
      <input type="radio" name="po-btn" id="p-option__input3" />
      <div class="p-option__head">
        <label for="p-option__input1" class="p-option__head__btn po__btn1">
          Sản phẩm phổ biến
        </label>
        <label for="p-option__input2" class="p-option__head__btn po__btn2">
          Sản phẩm khuyến mại
        </label>
        <label for="p-option__input3" class="p-option__head__btn po__btn3"> Sản phẩm mới </label>
      </div>
      <div class="p-option__popularity">
        <ProductList :number0fProduct="4" />
      </div>
      <div class="p-option__sale">
        <ProductList :number0fProduct="6" />
      </div>
      <div class="p-option__new">
        <ProductList :number0fProduct="8" />
      </div>
    </div>
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

/* Product options */
.p-option__wrapper > input {
  display: none;
}

.p-option__head {
  margin: 16px 0;
  display: flex;
}

.p-option__head__btn {
  font-size: 2rem;
  font-weight: 500;
  margin-right: 36px;
  transition: all 0.4s ease;
}

.p-option__popularity {
  display: none;
}

.p-option__sale {
  display: none;
}

.p-option__new {
  display: none;
}

.p-option__head__btn:hover {
  color: var(--primary-color);
}

#p-option__input1:checked ~ .p-option__popularity {
  display: block;
  color: var(--primary-color);
}

#p-option__input2:checked ~ .p-option__sale {
  display: block;
}

#p-option__input3:checked ~ .p-option__new {
  display: block;
}

#p-option__input1:checked ~ .p-option__head .po__btn1 {
  color: var(--primary-color);
}

#p-option__input2:checked ~ .p-option__head .po__btn2 {
  color: var(--primary-color);
}

#p-option__input3:checked ~ .p-option__head .po__btn3 {
  color: var(--primary-color);
}
</style>
