<template>
    <div id="app">
        <vue-particles
                 class="login-background"
                 color="#97D0F2"
                 :particleOpacity="1"
                 :particlesNumber="50"
                 shapeType="circle"
                 :particleSize="4"
                 linesColor="#97D0F2"
                 :linesWidth="1"
                 :lineLinked="true"
                 :lineOpacity="0.8"
                 :linesDistance="150"
                 :moveSpeed="3"
                 :hoverEffect="true"
                 hoverMode="grab"
                 :clickEffect="true"
                 clickMode="push">
         </vue-particles>
    </div>
 </template>
 <script>
 export default {
    name:'my-canvas'
 }
 </script>

 <style lang="scss" scoped>
 .login-background {
        // background: linear-gradient(-180deg, #dcf2e6 0%, #ffffff 100%);
        width: 100%;
        height: 100%; /**宽高100%是为了图片铺满屏幕 */
        z-index: -1;
        position: absolute;
    }
 </style>