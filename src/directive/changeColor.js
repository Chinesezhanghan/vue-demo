/**
 * Created by Administrator on 2019/10/22.
 */
import Vue from "vue"

const changeColor=Vue.directive('changeColor',function (el,binding) {
       el.style.color='#'+Math.random().toString(16).slice(2,8);
       if(binding.arg==="color"){
        el.style.fontWeight=500;
       }
})


export  default changeColor;
