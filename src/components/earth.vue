<template>
    <div id="myecharts"></div>
  </template>
   
  <script>
  import * as echarts from "echarts";
  export default {
    name: "Globe-",
    data() {
      return {};
    },
    computed: {},
    created() {},
    mounted() {
      this.echartsInit();
    },
    methods: {
      echartsInit() {
        require("echarts-gl");
        const series = [
          {
            type: "lines3D",
            effect: {
              show: true,
              period: 3, // 尾迹特性周期
              trailLength: 0.1, // 尾迹0~1，线条长度的百分比
            },
            lineStyle: {
              color: "#d9d919",
              width: 2,
              opacity: 0.4,
            },
            data: [
              [[114.175193,22.275706],[120.4574,-1.743046]],
              [[126.964746,37.58644],[139.767187,35.715616]],
              [[-118.24762,34.058993],[139.767187,35.715616]]
            ]
            // data: this.activeData(this.linesData) // 大多数情况下数据是请求后再经过处理而来
            /*
            起点经纬度 终点经纬度
            [
              [[fromx0,fromy0],[tox0,toy0]],
              [[fromx1,fromy1],[tox1,toy1]]
            ]
            */
          },
          {
            type: "lines3D",
            lineStyle: {
              color: "#fff",
              width: 2,
              opacity: 0.6,
            },
            // data: this.normalData(this.linesData),
            data: [
              [[114.175193,22.275706],[100.454152,13.731434]],
              [[114.175193,22.275706],[2.332962,48.864677]],
              [[101.684555,3.15663],[114.175193,22.275706]],
              [[-118.24762,34.058993],[151.210446,-33.875774]]
            ]
          },
          {
            type: "scatter3D",
            coordinateSystem: "globe",
            zlevel: 3,
            label: {
              show: true,
              position: "bottom",
              formatter: "{b}",
              fontSize: 16
            },
            itemStyle: {
              color: "#d9d919",
            },
            data: [
              {"name":"香港","value":[114.175193,22.275706]},
              {"name":"东京","value":[139.767187,35.715616]},
              {"name":"首尔","value":[126.964746,37.58644]},
              {"name":"印尼","value":[120.4574,-1.743046]},
              {"name":"洛杉矶","value":[-118.24762,34.058993]}
            ],
          },
          {
            type: "scatter3D",
            coordinateSystem: "globe", // 使用的坐标系
            zlevel: 3,
            label: {
              show: true,
              position: "bottom",
              formatter: "{b}",
              fontSize: 16
            },
            itemStyle: {
              color: "#fff",
            },
            data: [
              {"name":"吉隆坡","value":[101.684555,3.15663]},
              {"name":"曼谷","value":[100.454152,13.731434]},
              {"name":"悉尼","value":[151.210446,-33.875774]},
              {"name":"巴黎","value":[2.332962,48.864677]}
            ]
            /*
            [
              {
                name: '',
                value: [lng,lat]
              }
            ]
            */
          }
        ];
        const myecharts = echarts.init(document.getElementById("myecharts"));
        const option = {
          backgroundColor: "#000",
          globe: {
            baseTexture: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20210525143835453.jpg%3Fx-oss-process%3Dimage%2Fwatermark%2Ctype_ZmFuZ3poZW5naGVpdGk%2Cshadow_10%2Ctext_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2RpdmluZXJfcw%3D%3D%2Csize_16%2Ccolor_FFFFFF%2Ct_70&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666346658&t=2d258d1a632b0697531a00301c9fb14f', // 地球的纹理
            shading: "lambert",
            atmosphere: { // 不需要大气光圈去掉即可
              show: true,
              offset: 4 // 大气层光圈宽度
            },
            viewControl: {
              distance: 200 // 默认视角距离地球表面距离
            },
            light: {
              ambient: {
                intensity: 1.3, // 全局的环境光设置
              },
              main: {
                intensity: 1.5, // 场景主光源设置
              },
            },
          },
          series: series,
        };
        myecharts.setOption(option);
      },
    },
  };
  </script>
   
  <style lang="scss" scoped>
  #myecharts {
    width: 900px;
    height: 900px;
    margin: 0 auto;
  }
  </style>