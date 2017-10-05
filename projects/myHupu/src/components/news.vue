<template>
<div class="news-module">
  <!-- 二级导航条 -->
  <div class="nav-list-wrap" >
    <div class="nav-list">
      <ul>
        <li v-for="(item,index) in navList" :class="{'selected': selectedIndex == index}" @click="changeNav(index)">
          {{item.text}}
        </li>
      </ul>
    </div>
    <i class="iconfont icon-jiahao"></i>
  </div>

  <!--三级导航条-->
  <!--<div class="third-nav-list">-->
    <!--<ul>-->
      <!--<li>全部</li>-->
      <!--<li>视频</li>-->
      <!--<li>2k</li>-->
      <!--<li>深度</li>-->
      <!--<li>图集</li>-->
    <!--</ul>-->
  <!--</div>-->

  <template v-if="loading==false">
    <ul class="games clearfix">
      <li>
        <p class="title">全运会男篮决赛</p>
        <div class="team t1 ">
          <img src="" alt="">
          <p>辽宁</p>
        </div>
        <div class="text">78-61</div>
        <div class="team t2">
          <img src="" alt="">
          <p>新疆</p>
        </div>
      </li>
      <li>
        <p class="title">全运会男篮决赛</p>
        <div class="team t1">
          <img src="" alt="">
          <p>辽宁</p>
        </div>
        <div class="text">78-61</div>
        <div class="team t2">
          <img src="" alt="">
          <p>新疆</p>
        </div>
      </li>
    </ul>
    <!-- 新闻列表 -->
    <ul class="news-list " v-if="navList[selectedIndex] && navList[selectedIndex].newsList && navList[selectedIndex].newsList.length">
      <li class="clearfix" v-for="news in navList[selectedIndex].newsList">
        <img src="" alt="">
        <div class="content">
          <p class="title">{{news.text}}</p>
          <div class="interactive" v-if="news.comment > 0">
            <span class="light" v-if="news.light > 0"><i class="iconfont icon-dengpao"></i>{{news.light}}</span>
            <span class="comment"><i class="iconfont icon-xiaoxi"></i>{{news.comment}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="no-news" v-else>
      no news
    </div>
  </template>
</div>

</template>

<script>
  import Service from '../utils/service';
  import { Indicator } from 'mint-ui';

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

      Indicator.open();

      this.fetchData()
    },
    methods: {
      fetchData() {
        this.loading = true;
        this.navList = [];
        Service.getNewsNavList().then((res) => {
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

        Service.getNewsListById(id).then((res) => {
          this.loading = false;
          Indicator.close();
          this.$set(this.navList[index], 'newsList', res.data)
        });
      },
      changeNav(index) {
        this.loading = true;
        Indicator.open();
        this.selectedIndex = index;
        this.getNewList(index);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $redColor: rgb(191,30,46);

  .news-module{
    height: 100%;
    background-color: #ecebe9;
  }

  .nav-list-wrap{
    position: relative;
    padding-right: 72px;
    height: 98px;
    line-height: 98px;
    overflow-x: auto;
    background-color: #fff;

    .nav-list{
      overflow-x: auto;
    }

    ul {
      display: table;
      table-layout: fixed;
      white-space: nowrap;
      width: auto;

      li{
        -webkit-box-flex: 1;
        display: inline-block;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        vertical-align: top;
        margin-right: 10px;
        padding: 0 23px;
        font-size: 30px;
        color: #acabaf;

        &.selected {
           color: $redColor;
           border-bottom: 5px solid $redColor;
         }
      }
    }
  }

  .games{
    margin-top: 25px;
    font-size: 30px;
    li{
      float: left;
      width: 316px;
      height: 195px;
      margin-left: 14px;
      background-color: #fff;
      padding: 0 18px;
      border-radius: 5px;
      .title{
        height: 66px;
        line-height: 66px;
      }
      div{
        float: left;
      }
      .team{
        width: 84px;
        text-align: center;

        img{
          width: 76px;
          height: 76px;
        }
        p{
          margin-top: -8px;
        }
      }
      .t1{
        p{
          text-align: left;
        }
      }
      .t2{
        float:right;
        p{
          text-align: right;
        }
      }
      .text{
        width: 148px;
        height: 76px;
        line-height: 76px;
        text-align: center;
      }

    }
    li:nth-child(even){
      margin-left: 18px;
    }
  }

  .news-list{
    margin-top: 25px;
    font-size: 30px;
    background-color: #fff;


    li{
      height: 136px;
      padding: 19px 21px;
      border-bottom: 1px solid #ecebe9;
      overflow: hidden;

      img{
        float: left;
        width: 180px;
        height: 136px;
      }
      .content{
        float: left;
        width: 528px;
        .title{
          padding-left: 20px;
          height: 98px;
          line-height: 49px;
          word-break:break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .interactive{
          text-align: right;
        }
      }

      .light{
        margin-right: 12px;
      }

      .iconfont{
        display: inline-block;
        font-size: 36px;


        margin-right: 7px;
      }

    }
  }


  .icon-jiahao{
    position: absolute;
    top: 0;
    right: 16px;
    display: inline-block;
    font-size: 40px;
    background-color: #fff;
  }

  .clearfix {
    zoom: 1;
    &:after {
       content: "";
       display: block;
       height: 0;
       clear: both;
       visibility: hidden;
     }
  }
</style>
