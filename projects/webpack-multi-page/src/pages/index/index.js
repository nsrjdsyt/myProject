import './index.scss'

class Main {
  init(){
    this.render()
  }

  render(){
    let $root = $('#root')
    
    $root.html("hello index")
  }
}

$(() => {
  new Main().init()
})
