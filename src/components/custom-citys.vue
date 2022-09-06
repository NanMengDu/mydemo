<template>
  <div>
    <el-form>
      <el-form-item label="所在地区">
        <el-select v-model="valueProvince" placeholder="请选择省" @change="changeProvince" style="width:120px">
          <el-option v-for="item in provinceList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="valueCity" placeholder="请选择市" @change="changeCity" style="width:120px">
          <el-option v-for="item in cityOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="valueOrigin" placeholder="请选择区" @change="changeOrigin" style="width:120px">
          <el-option v-for="item in originOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import jsonData from '@/china_address.js'
export default {
  data() {
    return {
      provinceList: [], // 省列表
      cityList: [], // 市列表
      originList: [], // 区列表
      valueProvince: '', // 所选的省
      valueCity: '', // 所选的市
      valueOrigin: '', // 所选的区
      cityOptions: [], // 市下拉框数据
      originOptions: [],// 区下拉框数据
    }
  },
  created() {
    this._getJsonData()
  },
  methods: {
    // 选择省
    changeProvince(val) {
      this.provinceList.forEach((province, index) => {
        if (val.toString() === this.provinceList[index].value) {
          this.cityOptions = this.provinceList[index].children
          this.valueCity = ''
          this.originOptions = this.provinceList[index].children[0].children
          this.valueCity = ''
          this.valueOrigin = ''
          // 如果选中省之后想市区默认选中
          // this.valueCity = this.provinceList[index].children[0].value
          // this.valueOrigin = this.provinceList[index].children[0].children[0].value
        }
      });
    },
    // 选择市
    changeCity(val) {
      this.cityList.forEach((city, index) => {
        if (val.toString() === this.cityList[index].value) {
          this.originOptions = this.cityList[index].children
          this.valueOrigin = ''
          //如果选中市之后默认区选中
          // this.valueOrigin = this.cityList[index].children[0].value
        }
      });
    },
    // 选择区
    changeOrigin(val) {
      this.valueOrigin = val
    },
    // 初始化省市区数据
    _getJsonData() {
      // console.log('res =======>' + jsonData)
      this.provinceList = [];
      this.cityList = [];
      this.originList = [];
      jsonData.forEach((item) => {
        if (item.value.match(/0000$/)) {
          this.provinceList.push({
            value: item.value,
            label: item.name,
            children: []
          })
        } else if (item.value.match(/00$/)) {
          this.cityList.push({
            value: item.value,
            label: item.name,
            children: []
          })
        } else {
          this.originList.push({
            value: item.value,
            label: item.name
          })
        }
      })
      for (let index in this.provinceList) {
        for (let index1 in this.cityList) {
          if (this.provinceList[index].value.slice(0, 2) === this.cityList[index1].value.slice(0, 2)) {
            this.provinceList[index].children.push(this.cityList[index1])
          }
        }
      }
      for (let item1 in this.cityList) {
        for (let item2 in this.originList) {
          if (this.originList[item2].value.slice(0, 4) === this.cityList[item1].value.slice(0, 4)) {
            this.cityList[item1].children.push(this.originList[item2])
          }
        }
      }
    },

  },
  mounted(){
    this.$bus.$emit('send',111)
  }
}
</script>