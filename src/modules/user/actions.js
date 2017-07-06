//create 17,07,06 lc
import * as core from 'core';
import * as constant from './constant';


//普通行为-可改变component
let normal = {
    init:core.createAction('normal',constant.NAME,'INIT')
}
//数据处理行为-不可改变component
let effect = {
    init:core.createAction('effect',constant.NAME,'INIT')
}
export {
    normal,
    effect
}