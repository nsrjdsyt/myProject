<template>
<div>
  <!-- loading -->
  <div class="loading" v-if="loading">
    loading...
  </div>

  <!-- 二级导航条 -->
  <ul class="nav-list clearfix" v-else>
    <li v-for="(item,index) in navList" :class="{'selected': selectedIndex == index}" @click="changeNav(index)">
      {{item.text}}
    </li>
  </ul>

  <!-- 新闻列表 -->
  <ul class="news-list" v-if="navList[selectedIndex] && navList[selectedIndex].newsList && navList[selectedIndex].newsList.length">
    <li v-for="news in navList[selectedIndex].newsList">
      {{news.text}}
    </li>
  </ul>
  <div class="no-news" v-else>
    no news
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      navList: [],
      selectedIndex: 0
    }
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = false;
      this.navList = [];
      this.axios.get('/mock/newsNavList.json').then((res) => {
        this.navList = res.data || [];

        if (this.navList.length) {
          this.getNewList(0);
        }
      });
    },
    getNewList(index) {
      let id = this.navList[index].id;

      if (this.navList[index].newsList) {
        return
      }

      this.axios.get(`/mock/newsList-${id}.json`).then((res) => {
        this.$set(this.navList[index], 'newsList', res.data)
      });
    },
    changeNav(index) {
      this.selectedIndex = index;
      this.getNewList(index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
  /*水平垂直居中样式*/
}

.nav-list {
  /*单行左右滑动样式*/
}

li {
  float: left;
  margin-right: 10px;
}

.selected {
  border: 1px solid red;
}

.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  zoom: 1;
}
</style>
