<template>    
    <scroll-view class="swiper-tap" scroll-x style="width: 100%">
        <view class="swiper-tab-item" v-for="(item,index) in navList" :key="index" :data-current="index" @tap="swichNav">{{item.title}}</view>
    </scroll-view>    
</template>

<script>

import {obj2style} from '@/common/js/basic'

export default {
    name: 'slider-nav',
    data() {
        return {
            winWidth: null,
            winHeight: null,
            navWidth: null,
        }
    },
    props: {
        navList: {
            type: Array,
        },
        menuWidth: {
            type: Number,
        },
        currentTab: {
            type: Number,
            default: 0,
        },
        font: {
            type: Number,
            default: 14,
        },
    },
    methods: {
        swichNav(e) {
            console.log("点击了swichNav方法");
        }
    },
    computed: {
        style() {
            // 计算左侧剩余多少宽度，所以滚动条起始位置要加
            // let leftWidth = (this.winWidth - this.navList.length * this.navWidth) / 2;
            // let width = this.navWidth + 'px';
            // let left = leftWidth + this.navWidth * this.currentTab + 'px';
            // let style = {
            //     left,
            //     width,
            // }
            // console.log(style)
            // return obj2style(style)
        },
        menuStyle() {
            // let style = {}
            // style['font-size'] = this.font + 'px'
            // style['width'] = this.navWidth + 'px'
            // return obj2style(style)
        }
    },
}   
</script>

<style lang="scss" scoped>
$time: .2s;
$slider-color: #aaa;
.swiper-tab {
    width: 100%;
    text-align: center;
    line-height: 42px;
    white-space: nowrap;
    position: relative;
    .swiper-tab-item {
        transition: all $time;
        font-size: 18px;
        height: 42px;
        display: inline-block;
        color: #777777;
    }
    .block {
        display: block;
        position: absolute;
        left: 0;
        height: 2px;
        background: $slider-color;
        bottom: 20px;
        transition: left $time;
        z-index: 99;
    }
}
</style>


