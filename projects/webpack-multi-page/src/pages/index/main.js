import { PRODUCT_TYPE } from '../common/constant';
import M from './module1/m'
import sass from './main.scss';

let html = new M({
    pageName: 'index page'
}).init();

console.log("PRODUCT_TYPE.CARD=",PRODUCT_TYPE.CARD);

document.getElementById('content').innerHTML = html;
