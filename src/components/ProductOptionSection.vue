<script>
import ProductList from '../components/ProductList.vue'

export default {
  components: {
    ProductList
  },
  data() {
    return {
      productOption: 'popularity'
    }
  }
}
</script>
<template>
  <div class="p-option__wrapper">
    <!-- <input type="radio" name="po-btn" id="p-option__input1" checked />
      <input type="radio" name="po-btn" id="p-option__input2" />
      <input type="radio" name="po-btn" id="p-option__input3" /> -->
    <div class="p-option__head">
      <button class="p-option__head__btn" @click="productOption = 'popularity'">
        Sản phẩm phổ biến
      </button>
      <button class="p-option__head__btn" @click="productOption = 'sale'">
        Sản phẩm khuyến mại
      </button>
      <button class="p-option__head__btn" @click="productOption = 'new'">Sản phẩm mới</button>
    </div>
    <ProductList :number0fProduct="4" v-if="productOption === 'popularity'" />
    <ProductList :number0fProduct="6" v-if="productOption === 'sale'" />
    <ProductList :number0fProduct="8" v-if="productOption === 'new'" />
  </div>
</template>
<style lang="css" scoped>
.p-option__wrapper > input {
  display: none;
}

.p-option__head {
  margin: 16px 0;
  display: flex;
}

.p-option__head__btn {
  border: none;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 36px;
  transition: all 0.4s ease;
}

.p-option__head__btn:hover {
  color: var(--primary-color);
}
</style>
