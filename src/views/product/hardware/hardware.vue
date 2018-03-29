<template>
 <el-row>
    <el-col :span="24">
        <div class="grid-content bg-purple">
          <!-- <product-header></product-header> -->
          <el-row>
      		<!-- 产品列表顶部开始 -->
    				<el-col :span="24" class="pro-list-header">
        			<el-row>
								<el-col :span="12">
                  <div class="grid-content bg-purple">
										<div class="pro-list-header-left">
											<i class="el-icon-menu pro-list-header-icon"></i>
											<span>产品管理</span>
										</div>
									</div>
								</el-col>
								<el-col :span="12">
									<div class="grid-content bg-purple-light"> 
										<el-row>
                      <el-col :span="5" :offset=13>
                          <div class="grid-content bg-purple">
                            <el-button type="primary" round size="mini">保存送审并添加同名产品</el-button>
                          </div>
                      </el-col>
                      <el-col :span="2">
                          <div class="grid-content bg-purple-light">
                            <el-button type="primary" round size="mini">保存</el-button>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <el-button round size="mini">取消</el-button>
                          </div>
                      </el-col>
          					</el-row>          
          				</div>
								</el-col>
							</el-row>
    				</el-col>
    <!-- 产品列表顶部结束 -->
  				</el-row>
        </div>
    </el-col>
    <el-col :span="10">
				<el-row>
  				<el-col :span="24">
						<div class="grid-content bg-purple-dark all-modify-options">
							<el-row>
                <!-- 产品详情开始 -->
								<el-col :span="16">
									<div class="grid-content bg-purple first-title-line" ref="productDetailsLight">
										<p class="main-title">产品详情</p>
									</div>
								</el-col>
								<el-col :span="3" :offset=2>
									<div class="grid-content bg-purple-light first-title-line tanKuangFather">
                      <el-button type="text" @click="dialogVisible = true" class="product-price-btn">编辑</el-button>
									</div>
								</el-col> 
                <!-- 产品详情结束 -->
                <!-- 产品类型开始 -->
                 <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height">
                    <el-row>
                      <el-col :span="4"><div class="grid-content bg-purple"><p class="main-dimension">产品类型</p></div></el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <el-select v-model="value4" clearable placeholder="请选择" size="mini" class="pro-details" style="width:100%">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
	              <el-col :span="3" :offset=1>
									<div class="grid-content bg-purple-light dimension-height tanKuangFather">
										<el-button type="text" @click="dialogVisible = true" class="product-price-btn">编辑</el-button>
									</div>
								</el-col>
                <!-- 产品类型结束 -->
                <!-- 产品名称开始 -->
                  <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height">
                    <el-row>
                      <el-col :span="4"><div class="grid-content bg-purple"><p class="main-dimension">产品名称</p></div></el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <el-input
                            placeholder="请输入内容"
                            v-model="input10"
                            size="mini"
                            clearable>
                          </el-input>
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
	              <el-col :span="3" :offset=1>
									<div class="grid-content bg-purple-light dimension-height">
										<el-popover placement="right" width="160" trigger="click">
                      <el-input ></el-input>
                      <div style="margin-top:10px">
                          <el-button size="mini" style="float:left" 
                              >取消</el-button>
                          <el-button size="mini" type="primary" 
                              style="float:right" 
                              >确认</el-button>
                      </div>
                      <span slot="reference" type="text" style="width:40px">         
                          编辑  
                      </span>
                    </el-popover>
									</div>
								</el-col>
                <!-- 产品名称结束 -->
                <!-- 品牌开始 -->
                <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height">
                    <el-row>
                      <el-col :span="4"><div class="grid-content bg-purple"><p class="main-dimension">品牌</p></div></el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <el-select v-model="value4" clearable placeholder="请选择" size="mini" class="pro-details" style="width:100%">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
	              <el-col :span="3" :offset=1>
									<div class="grid-content bg-purple-light dimension-height">
										<el-popover placement="right" width="160" trigger="click">
                      <el-input ></el-input>
                      <div style="margin-top:10px">
                          <el-button size="mini" style="float:left" 
                              >取消</el-button>
                          <el-button size="mini" type="primary" 
                              style="float:right" 
                              >确认</el-button>
                      </div>
                      <span slot="reference" type="text" style="width:40px">         
                          编辑  
                      </span>
                    </el-popover>
									</div>
								</el-col>
                <!-- 品牌结束 -->
                <!-- 产品规格开始 -->
                <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height">
                    <el-row>
                      <el-col :span="4"><div class="grid-content bg-purple"><p class="main-dimension">产品规格</p></div></el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light" style="background:#F7F7F7;padding:0 5px">
                          <el-input
                            placeholder="请输入内容"
                            v-model="input10" 
                            size="mini"
                            clearable>
                          </el-input>
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
	              <el-col :span="3" :offset=1>
									<div class="grid-content bg-purple-light dimension-height">
										<el-popover placement="right" width="160" trigger="click">
                      <el-input ></el-input>
                      <div style="margin-top:10px">
                          <el-button size="mini" style="float:left" 
                              >取消</el-button>
                          <el-button size="mini" type="primary" 
                              style="float:right" 
                              >确认</el-button>
                      </div>
                      <span slot="reference" type="text" style="width:40px">         
                          编辑  
                      </span>
                    </el-popover>
									</div>
								</el-col>
                <!-- 产品规格结束 -->
                <!-- 产品描述开始 -->
                <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height">
                    <el-row>
                      <el-col :span="4"><div class="grid-content bg-purple"><p class="main-dimension">产品描述</p></div></el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 8, maxRows:8}"
                              placeholder="请输入内容"
                              v-model="textarea3">
                            </el-input>
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
	              <el-col :span="3" :offset=1>
									<div class="grid-content bg-purple-light dimension-height">
										<el-popover placement="right" width="160" trigger="click">
                      <el-input ></el-input>
                      <div style="margin-top:10px">
                          <el-button size="mini" style="float:left" 
                              >取消</el-button>
                          <el-button size="mini" type="primary" 
                              style="float:right" 
                              >确认</el-button>
                      </div>
                      <span slot="reference" type="text" style="width:40px;line-height:180px">         
                          编辑  
                      </span>
                    </el-popover>
									</div>
								</el-col>
                <!-- 产品描述结束 -->
                <!-- 添加模块1开始 -->
                <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height">
                    <el-row>
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <p class="main-dimension">
                            <i class="el-icon-plus addModuleWidth"></i>
                            <span class="addModuleWidthText">添加模块</span>
                          </p>
                        </div>
                      </el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
	              <!-- 添加模块1结束 -->
                <!-- 产品价格表头开始 -->
                <el-col :span="16">
									<div class="grid-content bg-purple product-price">
										<p class="main-title">产品价格</p>
									</div>
								</el-col>
								<el-col :span="3" :offset=2>
									<div class="grid-content bg-purple-light product-price">
                    <el-popover placement="right" width="160" trigger="click">
                      <el-input ></el-input>
                      <div style="margin-top:10px">
                          <el-button size="mini" style="float:left" 
                              >取消</el-button>
                          <el-button size="mini" type="primary" 
                              style="float:right" 
                              >确认</el-button>
                      </div>
                      <span slot="reference" type="text" style="width:40px">         
                          编辑  
                      </span>
                    </el-popover> 
									</div>
								</el-col>
                <!-- 产品价格表头结束 -->
                <!-- 产品价格开始 -->
                <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height" >
                    <el-row>
                      <el-col :span="4"><div class="grid-content bg-purple" ref="product-price-input"><p class="main-dimension">产品价格</p></div></el-col>
                      <el-col :span="16">
                        <div class="grid-content bg-purple-light">
                            <el-input
                            placeholder="请输入内容"
                            v-model="input10"
                            size="mini"
                            clearable>
                          </el-input>
                        </div>
                      </el-col>
                      <el-col :span="1">
                        <div class="grid-content bg-purple-light product-price-input">
                          <span style="padding-left:5px">元</span>
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
	              <el-col :span="3" :offset=1>
									<div class="grid-content bg-purple-light dimension-height">
										<el-button type="text" @click="priceInputEditClick" class="product-price-btn">编辑</el-button>
                    <el-dialog
                      :visible.sync="dialogVisible"
                      width="35%"
                      top = "180px"
                      :show-close = false
                      style="padding-left:35%"
                      custom-class="tanKuangPosition"
                      :before-close="handleClose">
                      <el-form ref="form" :model="form" label-width="80px">
                        <el-col :span="24"><div class="grid-content bg-purple-dark" style="font-size:14px;font-weight:700;margin-bottom:10px;position:absolute;top:0px">标题</div></el-col>
                          <el-form-item label="标题名称">
                        <el-col :span="21" offset=1>
                          <div class="grid-content bg-purple-dark" >
                            <el-input v-model="form.name" size="mini"></el-input>
                          </div>
                        </el-col>
                      </el-form-item>
                        <el-col :span="24">
                          <div class="grid-content bg-purple-dark" style="font-size:14px;font-weight:700;margin-bottom:10px">
                            输入框
                          </div>
                        </el-col>
                      <el-form-item label="提示文案">
                        <el-col :span="21" offset=1><div class="grid-content bg-purple-dark" >
                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 2, maxRows: 4}"
                              placeholder="请输入内容"
                              v-model="form.desc">
                            </el-input>
                          </div>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="客户端输">
                        <el-col :span="21" offset=1 ><div class="grid-content bg-purple-dark" >
                          <el-row>
                            <el-col :span="16">
                              <div class="grid-content bg-purple-light">
                                  <el-switch                                  
                                  v-model="value2"
                                  active-color="#13ce66"
                                  inactive-color="#ff4949">
                                </el-switch>
                              </div>
                            </el-col>
                          </el-row>
                          </div>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="内容限制">
                        <el-col :span="21" ><div class="grid-content bg-purple-dark" >
                           <el-row>
                            <el-col :span="16" :offset=1>
                              <div class="grid-content bg-purple-light">
                                <el-select v-model="value" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in options7"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </div>
                            </el-col>
                          </el-row>
                          </div>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="计量单位">
                        <el-col :span="21" ><div class="grid-content bg-purple-dark" >
                           <el-row>
                            <el-col :span="16" :offset=1>
                              <div class="grid-content bg-purple-light">
                                <el-select v-model="value" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in options7"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </div>
                            </el-col>                            
                          </el-row>
                          </div>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="价格体系">
                        <el-col :span="21" ><div class="grid-content bg-purple-dark" >
                           <el-row>
                            <el-col :span="16" :offset=1>
                              <div class="grid-content bg-purple-light">
                                <el-select v-model="value" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in options7"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </div>
                            </el-col>                            
                          </el-row>
                          </div>
                        </el-col>
                      </el-form-item>  
                    </el-form>
                  </el-dialog>
								</div>
							</el-col>
                <!-- 产品价格结束 -->
                <!-- 添加模块2开始 -->
                <el-col :span="16" :offset=1>
									<div class="grid-content bg-purple dimension-height">
                    <el-row>
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <p class="main-dimension">
                            <i class="el-icon-plus addModuleWidth"></i>
                            <span class="addModuleWidthText">添加模块</span>
                          </p>
                        </div>
                      </el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          
                        </div>
                      </el-col>
                    </el-row>
									</div>
								</el-col>
                <!-- 添加模块2结束 -->
							</el-row>
						</div>  
					</el-col>
				</el-row>
    </el-col>
    <!-- 点击添加模块按钮后显示维度添加列表开始 -->
    <!-- <el-col :span="12">
      <div class="grid-content bg-purple-light all-modify-options" style="border:1px solid #ccc;height:400px">
				<el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              
            </div>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">2</div></el-col>
        </el-row>
      </div>  
    </el-col> -->
    <!-- 点击添加模块按钮后显示维度添加列表结束 -->

     <!-- 中间指示箭头开始 -->
		<el-col :span="2">
      <div class="grid-content bg-purple-light all-modify-options">
		 		<i class="el-icon-arrow-right" style="font-size:50px;margin-top:300px;color:#C9C9C9"></i>
      </div>  
    </el-col>
     <!-- 中间指示箭头结束 -->

    <!-- 最右侧手机视图开始 -->
    <el-col :span="8" :offset=2>
        <div class="grid-content bg-purple-light all-modify-options mobile-box" style="height:850px">
          
        </div>  
    </el-col>
    <!-- 最右侧手机视图结束 -->


    <p v-for="item in list"><span>{{item.text}}</span><span><input v-if='item.type==1' type="text"><input v-if='item.type==2' type="text"><input v-if='item.type==3' type="text"></span></p>
</el-row>

    

</template>

<script>
import draggable from "vuedraggable";
// import productHeader from "../../components/common/product-header.vue";
export default {
  data() {
    return {
      list: [
        {text: '打号机', type: 1,},
        {text: '打号机', type: 2,},
        {text: '打号机', type: 1,},
        {text: '打号机', type: 2,},
        {text: '打号机', type: 1,},
        {text: '打号机', type: 1,},
        {text: '打号机', type: 1,},
        ],
      input23: "",
      input10: "",
      input: "",
      textarea: "",
      textarea3: "",
      value:'',
      dialogVisible: false,
      dragElement: null,
      lock: true,
      value1: true,
      value2: true,
  
  
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value4: "",
      options7: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value7: "",
      form: {
          name: '',
         
          date1: '',
          date2: '',
          delivery: false,
        },
      ruleForm: {
          name: '',
        
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
       
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    
  },
  components: {
    // productHeader
    draggable
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    priceInputEditClick(){
      this.dialogVisible = true;
      console.log(this.$refs)
    
    }
  }
};
</script>

<style scoped lang=scss>
 
  .el-dialog__wrapper,.v-modal{
    top:61px
  }
.pro-list-header {
  
  overflow: hidden;
  border-radius: 4px;
  min-height: 36px;
  line-height: 54px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-left: 20px;
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
}
.all-modify-options {
  padding-left: 50px;
  margin-top: 50px;
  .tanKuangFather {
  
    .product-price-btn {
      color: #000;
    }
  }
  .first-title-line {
    line-height: 38px;
  }
  .product-price {
    margin-top: 15px;
  }
  .main-title {
    font-size: 15px;
    font-weight: 700;
  }
  .dimension-height {
    margin-top: 20px;
    line-height: 38px;
    .product-price-btn {
      color: #000;
    }
    .main-dimension {
      color: #666;
      font-size: 14px;
      .addModuleWidth {
        line-height: 24px;
        font-size: 20px;
      }
      .addModuleWidthText {
        font-size: 16px;
        line-height: 40px;
        margin-left: 20px;
      }
    }
  }
}
.mobile-box{
  background-image: url(../../../assets/pc_iPhone.png) ;
  background-repeat:no-repeat;
}
.right {
  float: right;
  width: 60px;
}

.drag-box-left {
  float: left;
  width: 45%;
}
.drag-box-right {
  float: right;
  width: 45%;
}
.drag-list {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  transition: border 0.3s;
}
.drag-list:hover {
  border: 1px solid #20a0ff;
}
.drag-title {
  font-weight: 400;
  /* line-height: 25px; */
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
</style>


