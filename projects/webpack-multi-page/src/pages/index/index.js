import contentTpl from './Content/index.tpl'
import adTpl from './Ad/index.tpl'
import BottomTpl from './Bottom/index.tpl'
import TaskList from './TaskList/index.js'
import RecommendGoods from './RecommendGoods/index.js'
import './index.scss'

class Main {
  init(){
    this.render()
  }

  render(){
    let $root = $('#root')

    $root.html(contentTpl({}))

    new TaskList({
      container: $root.find('.task-list-floor'),
      data: {
        title: '其他任务',
        moreLink: '#'
      }
    }).init()

    new RecommendGoods({
      container: $root.find('.recommend-goods-floor'),
      data: {
        title: '用券商品推荐',
        moreLink: '#'
      }
    }).init()

    $root.find('.ad-floor').html(adTpl({
      adImg: '#',
      link: '#'
    }))

    $root.find('.bottom-floor').html(BottomTpl())
  }

  event(){

  }
}

$(() => {
  new Main().init()
})
