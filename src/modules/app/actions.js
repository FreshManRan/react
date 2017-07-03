//create 17,06,30 lc
import * as constant from './constant';
let initEffect = '&&_' + constant.NAME + '_EFFECT_INIT';
let init = '##_' + constant.NAME + '_NORMAL_INIT';
//普通行为-可改变component
let normal = {
    init:init
}
//数据处理行为-不可改变component
let effect = {
    init:initEffect
}
export {
    normal,
    effect
}