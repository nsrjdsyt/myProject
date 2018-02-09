let testTpl = require('./../template/test.tpl')
const logoUrl = require('./../images/logo.png')
const bannerUrl = require('./../images/banner.png')

require('./../style/index.css')
require('./../style/test.less')

let arrow = (list = [2, 2]) => {
  console.log(1, list);
}

arrow()

var [name, gender, age] = ['wayou2', 'male', 'secrect']; //数组解构
console.log('name:' + name + ', age2:' + age); //输出： name:wayou, age:secrect

function add(...x) {
  console.log(x);
}

add(1, 2, 3)

const str = 'hello '

document.getElementById('root').innerHTML = testTpl({
  name: `${str} world`,
  list: [1, 2, 3],
  logoUrl,
  bannerUrl
})
