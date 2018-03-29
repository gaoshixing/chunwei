<template>
  <div>
    <el-col :span="24" class="breadcrumb-container">
      <el-breadcrumb separator="/" class="breadcrumb-inner">
        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="24">
      <h4>{{ TemplateName }}</h4>
    </el-col>
    <el-col :span="24">
      <el-col :span="6" :style="{'margin-left': '30px','background-color':'#FFF'}">
        <p>选择维度</p>
        <el-form  ref="form" :model="DimList" :label-position="labelPosition" label-width="100px">
          <div class="DimListContent" draggable="true" data-text="input">
            <el-form-item label="手工输入框">
              <el-input placeholder="请输入内容"></el-input>
            </el-form-item>
          </div>
          <div class="DimListContent" draggable="true" data-text='select'>
            <el-form-item label="选择框">
              <el-select placeholder="请选择内容" v-model="DimList.dimSelect">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="DimListContent" draggable="true">
            <el-form-item label="金额输入框">
              <el-input placeholder="请输入金额"></el-input>
            </el-form-item>
          </div>
          <!-- <div class="DimListContent">
            <el-col :span="13">
              <el-form-item label="价格体系" :style="{'padding':'0'}">
                <el-input placeholder="请输入金额"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item :label="DimList.price" :style="{'width':'100px'}">
                <el-select placeholder="请选择单位" v-model="DimList.price">
                  <el-option label="元" value="元"></el-option>
                  <el-option label="角" value="jiao"></el-option>
                  <el-option label="分" value="fen"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </div> -->
          <div id="liu" class="DimListContent" draggable="true">
            <el-form-item label="判定选择框">
              <el-switch v-model="DimList.delivery"></el-switch>
            </el-form-item>
          </div>
          <div class="DimListContent">
            <el-form-item label="图片上传框">
              <div class="DimImgFrame">
                <i class="el-icon-plus" :style="{'font-size':'18px', 'line-height' :'30px'}"></i>
              </div>
            </el-form-item>
          </div>
          <div class="DimListContent">
            <el-form-item label="类型分割线"></el-form-item>
          </div>
          <div class="DimListContent">
            <el-form-item label="地址框">
              <el-input></el-input>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
      <el-col :span="8">
        <div id="AppCont" draggable="true">
          <ul id="AppContFixed">
            
          </ul>
        </div>
      </el-col>
      <el-col :span="8">

      </el-col>
    </el-col>
  </div>
</template>
<script>
const xxx = require('../../api/drop')
export default {
  data () {
    return {
      TemplateName: '模板名称',
      DimList: {
        delivery: true,
        dimSelect: '',
        price: '元'
      },
      labelPosition: 'right'
    }
  },
  mounted () {
    xxx.drag()
    xxx.dragEnter();
    xxx.continuedDrag();
    xxx.PutDrag();
  }
}
</script>
<style lang="scss">
@import '~scss_vars';
.breadcrumb-container {
	border-top: 1px solid #CCC;
	border-bottom: 1px solid #CCC;
	.title {
		width: 200px;
		float: left;
		color: #475669;
	}
	.breadcrumb-inner {
		height: 54px;
		line-height: 54px;
		background-color: #ffffff;
		.el-breadcrumb__item__inner{
			color: #000000 !important;
		}
	}
}
.DimListContent{
  max-width: 360px;
  width: 90%;
  background-color: #cccccc;
  padding: 5px 0px;
  margin: 15px auto;
  .el-form-item {
    margin-bottom: 0;
    padding-right: 10px;
    .el-form-item__label{
      font-size: 12px;
    }
    .el-input__inner{
      height: 32px;
      line-height: 32px;
    }
  }
}
.DimImgFrame{
  width: 30px;
  float: right;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #FFF;
  border: 1px solid #FFF;
}

#AppCont{
  width: 100%;
  max-width: 360px;
  min-height: 720px;
  height: 300px;
  background-color: #FFF;
  margin-left: 51px;
  ul{
    height: 100%;
    li{
      width: 100%;
      height: 40px;
      background-color: #FFF;
      border-bottom: 1px solid #696969;
      a{
        height: 40px;
        line-height: 40px;
        color: #BBBBBB;
      }
    }
  }
  #AppContForm{
    height: 100%;
  }
}
</style>


