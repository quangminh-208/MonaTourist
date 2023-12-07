<script>
import NewItem from './NewItem.vue'

export default {
  components: {
    NewItem: NewItem
  },
  data() {
    return {}
  },
  props: {
    newsList: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            heading:
              '10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3',
            content:
              '1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, ...'
          },
          {
            id: 2,
            heading:
              '10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3',
            content:
              '1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, ...'
          },
          {
            id: 3,
            heading:
              '10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3',
            content:
              '1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, ...'
          }
        ]
      }
    }
  },
  methods: {
    a() {
      console.log('🚀 ~ file: NewsSection.vue:37 ~ newsList:', this.newsList)
    }
  }
}
</script>

<template>
  <div class="news__wrapper">
    <div class="row justify-content-evenly g-5">
      <NewItem
        v-for="(news, index) in this.newsList"
        :key="index"
        :imgNewUrl="`src/assets/img/new-${news.id}.jpg`"
        :news="news"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.news__wrapper {
  margin: 80px 0;
}
</style>
