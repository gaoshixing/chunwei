<template>
  <el-row>
      <!-- 产品列表顶部开始 -->
    <el-col :span="24" class="pro-list-header">
      <div class="grid-content bg-purple-dark">
        <el-row>
  <el-col :span="12"><div class="grid-content bg-purple"><div class="pro-list-header-left">
          <i class="el-icon-menu pro-list-header-icon"></i>
          <span>产品管理</span>
        </div></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"> <div class="pro-list-header-right demo-input-suffix">

            <el-input
              placeholder="请输入内容"
              v-model="input23"
              class="search-input">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            
          </div></div></el-col>
</el-row>
      </div>
    </el-col>
    <!-- 产品列表顶部结束 -->
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input23: ''
    }
  }
}
</script>

<style scoped lang = scss>
    .pro-list-header {
  overflow: hidden;
  border-radius: 4px;
  min-height: 36px;
  line-height: 54px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-left: 30px;
  border-radius: 0%;
  .pro-list-header-left {
    float: left;
    display: inline-block;
    .pro-list-header-icon {
      color: rgba(32, 139, 212, 1);
    }
    span {
      font-size: 14px;
    }
  }
  .pro-list-header-right {
    border-radius: 50%;
    float: right;
    display: inline-block;
    .search-input {
      width: 360px;
      height: 40px;
      border-radius: 20px;
    }
  }
}
</style>

