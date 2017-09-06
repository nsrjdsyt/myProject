import sassStyle from "./m.scss";
import mTpl from "./m.tpl";

class M {
    constructor(option) {
        this.pageName = option.pageName
    }

    init(){
        return mTpl({
            pageName: this.pageName
        });
    }
}
export default M;
