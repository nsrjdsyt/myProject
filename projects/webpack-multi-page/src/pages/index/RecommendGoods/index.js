import recommendGoodsTpl from './index.tpl'

class RecommendGoods {
  constructor(option){
    this.container = option.container
    this.data = option.data || {}
  }

  init(){
    this.render()
  }

  render(){
    this.container && this.container.html(recommendGoodsTpl({
      data: this.data
    }))
  }
}

export default RecommendGoods
