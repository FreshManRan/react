//create 17,06,30 lc
import * as constant from './constant';
let initEffect = '&&_' + constant.NAME + '_EFFECT_INIT';
let init = '##_' + constant.NAME + '_NORMAL_INIT';
let normal = {
    init:init
}
let effect = {
    init:initEffect
}
export {
    normal,
    effect
}