<template>
    <div id="app">
      <!-- 父盒子 -->
      <div class="tab">
        <!-- 每个tab -->
        <div
          v-for="(item, idx) in arr"
          :key="item.id"
          class="tabs"
          :class="{ tbasBorder: activeName === idx }"
          @mousemove="slideMove(idx)"
          @mouseleave="slideOut(idx)"
          @click="handleClick(idx)"
        >
          <a>{{ item.title }}</a>
        </div>
        <!-- 滑动块 -->
        <div class="slide" :style="move"></div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        // 当前点击的索引
        activeName: 0,
        // 当前滑动的索引
        MoveCurrent: 0,
        move: 'left:0px',
        arr: [
          { id: 1, title: '首页' },
          { id: 2, title: '公司概况' },
          { id: 3, title: '技术创新' },
          { id: 4, title: '技术创新' },
          { id: 5, title: '技术创新' }
        ]
      }
    },
    methods: {
      // 点击时
      handleClick (idx) {
        this.activeName = idx
      },
      // 鼠标经过
      slideMove (idx) {
        this.MoveCurrent = idx
        this.move = 'left:' + (100 * idx) + 'px;height:4px;'
      },
      // 鼠标移除时
      slideOut (idx) {
        this.move = 'left:' + (100 * idx) + 'px;height:0px;'
      }
    }
  }
  </script>
  <style>
  .tab {
    position: relative;
    cursor: pointer;
    display: flex;
    /* 防止滑动时 产生保留上次效果 浏览器问题*/
    overflow: hidden;
  }
  .tabs {
    padding: 10px 10px;
    width: 80px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tbasBorder {
    border-bottom: 4px solid #023d99;
  }
  .slide {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100px;
    height: 0px;
    background: #023d99;
    transition: all .3s;
  }
  </style>