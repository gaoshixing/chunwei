<template>
  <el-row>
    <div style="height：100% ; width:100%; background-color:red;">
      fsdfsd
    </div>
    <!-- 产品列表顶部开始 -->
    <product-header></product-header>  
    <!-- 产品列表顶部结束 -->
    <!-- 产品列表中间开始 -->
   <el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple-dark pro-list-center">
      <el-row>
        <!-- 中间first部分开始 -->
        <el-col :span="3">
          <div class="grid-content bg-purple pro-filter-action add-button">
            <el-button type="primary" class="pro-header-second-button" :span="2" size='small'>点击添加 </el-button>
          </div>
        </el-col>
        <el-col :span="15"><div class="grid-content bg-purple-light pro-filter-action">
          <el-dropdown @command="handleCommand" class="select-type">
            <span class="el-dropdown-link type-select-title">
              类型筛选
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">全部</el-dropdown-item>
              <el-dropdown-item command="b">硬件</el-dropdown-item>
              <el-dropdown-item command="c">宽带</el-dropdown-item>
              <el-dropdown-item command="d">服务</el-dropdown-item>
              <el-dropdown-item command="e">解决方案</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      <el-dropdown @command="handleCommand" class="select-type">
          <span class="el-dropdown-link type-select-title">
          名称筛选<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">全部</el-dropdown-item>
              <el-dropdown-item command="b">硬件</el-dropdown-item>
              <el-dropdown-item command="c">宽带</el-dropdown-item>
              <el-dropdown-item command="d">服务</el-dropdown-item>
              <el-dropdown-item command="e">解决方案</el-dropdown-item>
        </el-dropdown-menu>
</el-dropdown>
<el-dropdown @command="handleCommand" class="select-type">
          <span class="el-dropdown-link type-select-title">
          状态筛选<i class="el-icon-arrow-down el-icon--right"></i>
          </span> 
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">未审批</el-dropdown-item>
              <el-dropdown-item command="b">未送审</el-dropdown-item>
              <el-dropdown-item command="c">驳回</el-dropdown-item>
              <el-dropdown-item command="d">已上架</el-dropdown-item>
              <el-dropdown-item command="e">解决方案</el-dropdown-item>
        </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="grid-content bg-purple pro-filter-action">
        <div class="all-list-mount">
          <span>总条目数 :</span>
          <span class="all-list-mount-text">11123</span> 
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="grid-content bg-purple pro-filter-action">
        <div class="current-list-mount">
          <span>当前页条目数 : </span>
          <span class="current-list-mount-text">23</span>   
        </div>
      </div>
    </el-col>
    <!-- 送审 审批 上架 下架 删除 开始 -->
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
              <el-row>
                <el-col :span="2"><div class="grid-content bg-purple-light">送审</div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div>审批</el-col>
                <el-col :span="2"><div class="grid-content bg-purple-light">上架</div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div>下架</el-col>
                <el-col :span="2"><div class="grid-content bg-purple-light">删除</div></el-col>
              </el-row>
          </div>
        </el-col>
        <!-- 送审 审批 上架 下架 删除 结束 -->
  </el-row>
  <!-- 中间first部分结束 -->
  <!-- 中间second部分开始 -->
  <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-table
    ref="multipleTable"
    :data="tableData3"
    align = 'center'
    tooltip-effect="dark"
    style="width: 100%"
    @select-all="aasf"
    @cell-click="cellClick"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="名称"
      header-align='center'
      align = 'center'
      stripe="false"
      show-overflow-tooltip
      >
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="型号规格"
      header-align='center'
      align = 'center'
      show-overflow-tooltip>
      <template slot-scope="scope">{{ scope.row.name }}</template>
    </el-table-column>
    <el-table-column
      label="品牌"
      header-align='center'
      align = 'center'
      show-overflow-tooltip
      >
      <template slot-scope="scope">{{ scope.row.address }}</template>
    </el-table-column>
    <el-table-column
      label="类型"
      header-align='center'
      align = 'center'  
      show-overflow-tooltip
      >
      <template slot-scope="scope">{{ scope.row.type }}</template>
    </el-table-column>
    <el-table-column
      label="创建人"
      header-align='center'
      align = 'center'
      show-overflow-tooltip
      >
      <template slot-scope="scope">{{ scope.row.creacter }}</template>
    </el-table-column>
    <el-table-column
      label="审批人"
      header-align='center'
      align = 'center'
      show-overflow-tooltip
      >
      <template slot-scope="scope">{{ scope.row.approver }}</template>
    </el-table-column>
    <el-table-column
      label="创建时间"
      header-align='center'
      align = 'center'
      show-overflow-tooltip>
      <template slot-scope="scope">{{ scope.row.creatTime}}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="上/下架时间"
      header-align='center'
      align = 'center'
      show-overflow-tooltip
      >
      <template slot-scope="scope">{{ scope.row.upOrDownTime }}</template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="状态"
      header-align='center'
      align = 'center'
      show-overflow-tooltip
    >
      <template slot-scope="scope">{{ scope.row.proState }}</template>
    </el-table-column>
    <el-table-column 
    width="250"
    align = 'center'
    prop= "address"
    label="操作" show-overflow-tooltip>
      <template slot-scope="scope">
        <a  @click="clickType(index)" v-if="item.isShow" v-for="(item, index) in scope.row.editList" :key='index'> {{item.text}} <span v-if="(index != scope.row.editList.length)&&item.isShow">|</span></a>
        <!-- <el-input
        type="text"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-input> -->

      </template>
    </el-table-column>
  </el-table>
  <!-- 分页开始 -->

  <el-tooltip placement="right">
  <div slot="content">多行信息<br/>第二行信息</div>
  <span style="display:block;width:100px">編輯</span>
</el-tooltip>


  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark pagination-center">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        prev-text='上一页'
        next-text='下一页'
        :total="1000"
        style="text-align:center;margin-top:10px">
        </el-pagination>
      </div>
    </el-col>
  </el-row>
 <!-- 分页结束 -->
        </div>
      </el-col>
  </el-row>
  <!-- 中间second部分结束 -->
</div>
</el-col>
  </el-row>
  <!-- 产品列表中间结束 -->

    
</el-row>
  

</template> 

<script>
import productHeader from '../../components/common/product-header'
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData3: [
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批",
          editList:[{isShow: true, text: '编辑'},
                {isShow: false, text: '审批'},
                {isShow: true, text: '删除'},
                {isShow: true, text: '下架'},
                {isShow: true, text: '删除'},
      ],
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批",
          editList:[{isShow: true, text: '编辑'},
                {isShow: false, text: '审批'},
                {isShow: true, text: '删除'},
                {isShow: true, text: '下架'},
                {isShow: true, text: '删除'},
      ],
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批",
          editList:[{isShow: true, text: '编辑'},
                {isShow: false, text: '审批'},
                {isShow: true, text: '删除'},
                {isShow: true, text: '下架'},
                {isShow: true, text: '删除'},
      ],
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批"
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批"
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批"
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批"
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批"
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批"
        },
        {
          date: "E云家-企业ICT无线-普通办公版",
          name: "DORS1228",
          address: "华为",
          type: "硬件",
          creacter: "李国强",
          approver: "王老五",
          creatTime: "2018-9-16",
          upOrDownTime: "2018-9-17",
          proState: "未审批"
        }
      ],
      multipleSelection: []
    };
  },
  components:{
    productHeader
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    clickType(index) {
      console.log(index)
    },
    aasf(val) {
      console.log(val);
    },
    cellClick(row, column, cell, event) {
      console.log(row, column, cell, event);
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        // path: "/pro/productList/hardware",
        name: 'hardware'
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped lang=scss>
.pro-list-center {
  width: 100%;
  padding-left: 30px;
  display: inline-block;

  .pro-filter-action {
    line-height: 60px;
    .select-type {
      padding-left: 15px;
    }
    .all-list-mount {
      .all-list-mount-text {
        color: red;
      }
    }
    .current-list-mount {
      .current-list-mount-text {
        color: red;
      }
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #000;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>