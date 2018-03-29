<template>
    <el-row class="container">
        <el-col class="Breadcrumb">
            <el-col :span="17">
                <el-breadcrumb  separator-class="el-icon-arrow-right" style="line-height:54px">
                    <el-breadcrumb-item >首页</el-breadcrumb-item>
                    <el-breadcrumb-item>产品管理</el-breadcrumb-item>
                    <el-breadcrumb-item>产品详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="5">
                <el-button round class="right">取消</el-button>
                <el-button type="primary" round class="right">保存</el-button>
            </el-col>.
        </el-col>
        <!-- 左侧内容开始 -->
        <el-col :span="15" class="productBox">
           <el-col :span="2">
               <img class="productimg" src="../../assets/images/product/product.png"  alt="">
           </el-col>
           <el-col :span="22">
              <el-form  ref="form" :model="form" label-width="80px">
                    <!-- 产品一级维度添加 -->
                    <div class="weiduBox">
                        <el-form-item label="产品名称">
                            <el-input placeholder="请输入内容" v-model="pName" clearable>{{pNAme}}</el-input>
                        </el-form-item>
                        <el-form-item label="产品分类">
                            <el-cascader :options="options"  change-on-select ></el-cascader>
                        </el-form-item>
                        <div class="pointer addwd addnew" id="">
                            <p><span>+</span>新增维度</p>
                            <p></p>
                        </div>
                    </div>
                    <!-- 添加规格框代码 -->
                    <div class="normsbox weiduBox relative" id="normsbox">
                        <el-form-item label="规格名称">
                            <el-input placeholder="规格1" v-model="gName" clearable></el-input>
                        </el-form-item>
                        <!-- 二级维度添加 -->
                        <div class="norms ">
                            <div class="norms-wd relative">
                                <div class="pointer addwd2 addnew"><p><span>+</span>新增维度</p></div>
                                <el-col :span="8">
                                    <el-form-item label="规格名称">
                                        <el-input placeholder="规格1" v-model="gName" clearable></el-input>
                                    </el-form-item> 
                                    <el-form-item label="规格名称">
                                        <el-input placeholder="规格1" v-model="gName" clearable></el-input>
                                    </el-form-item> 
                                </el-col>
                            </div>
                            <!-- 新增价格体系 -->
                            <div class="norms-jg">
                                <div class="pointer addwd3 addnew"><p><span>+</span>新增价格体系</p></div>
                            </div>
                        </div>
                        <!-- 左侧规格文字 -->
                        <div class="leftnorms">
                            <div >规格</div>
                        </div>
                    </div>
                    <!-- 新增规格按钮 -->
                    <div class="normsbtn pointer">
                        <span>+</span>新增规格
                    </div>
                    <div class="describe relative">
                        <div>
                            <span>产品描述</span>
                        </div>
                        <textarea class="form-control" style="resize: none;" placeholder="请输入产品简介"></textarea>
                        <textarea class="form-control" style="resize: none;" placeholder="请输入产品简介"></textarea>
                    </div>
              </el-form>
           </el-col>
            
        </el-col>
        <!-- 右侧手机预览及编辑框显示 -->
        <el-col  :span="8">
            <div class="col-md-3 rightbox">
                <!-- 手机及时预览界面 -->
                <div class="phoneshow relative" id="phonebox">
                    <h2>移动端展示</h2>
                    <div class="phonebox position">
                        <div class="txtphone">
                            <div>
                                <p>产品规格：</p>
                                <div class="spanbox" id="p_ggbox"><span class="yicang">请输入</span></div>
                            </div>
                            <div>
                                <p>二级属性：</p>
                                <div class="spanbox2" id="p_two"><span class="yicang">请输入</span></div>
                            </div>
                            <div class="p_guige">
                                <p>规格详情</p>
                                <section>
                                    <div><p class="fl">产品名称</p><p class="fr pc" id="pname_01" style="color:#aeaeae;">请输入</p></div>
                                    <div><p class="fl">产品分类</p><p class="fr" id="pfenlei_01"  style="color:#4D7BFE;">请输入</p></div>
                                </section>
                                <h5>新增维度</h5>
                            </div>
                            <div class="p_jiage">
                                <p>产品价格</p>
                                <section id="pjia_box">
                                    <div class="yicang"><p class="fl">产品价格</p><p class="fr" id="p_yishu">请编辑</p></div>
                                </section>
                                <h5>新增价格维度</h5>
                            </div>
                            <h6 id="pname_02">产品名称</h6>
                        </div>
                    </div>
                </div>
                <!-- 编辑框显示 -->
                <div class="none" id="templatebox" >
                    <h2>添加维度</h2>
                    <ul class="template">
                        <li data-templateName = "a">
                            <span>名称</span>
                            <input type="text" class="form-control marleft5" placeholder="请输入" readonly="readonly">
                        </li>
                         <li>
                            <span>名称</span>
                            <input type="text" class="form-control marleft5" placeholder="请输入" readonly="readonly">
                        </li>
                        <li data-templateName = "b">
                            <span>费用名称</span>
                            <input type="text" class="form-control marleft5" placeholder="请输入" readonly="readonly"><span>元</span>  
                        </li>
                        <li data-templateName = "c">
                            <span>名称</span>
                            <input type="text" class="form-control marleft5" placeholder="请输入" readonly="readonly"><span class="marleft5">元,</span><input type="text" class="form-control marleft5" placeholder="请输入" readonly="readonly">
                        </li>
                        <li data-templateName = "d">
                            <span>名称</span>
                            <input type="text" class="form-control marleft5" placeholder="请输入" readonly="readonly"><span class="marleft5">元,</span><input type="text" class="form-control marleft5" placeholder="请输入" readonly="readonly"><span class="marleft5">台</span>
                        </li>
                        <li data-templateName = "e">
                            <span>硬件名称</span>
                            <input type="text" class="form-control marleft5" placeholder="选择类型" readonly="readonly"><input type="text" class="form-control marleft5" placeholder="选择名称" readonly="readonly"><p><input type="text" class="form-control marleft5" placeholder="型号" readonly="readonly"><input type="text" class="form-control marleft5" placeholder=" 输入数量" readonly="readonly"></p>
                        </li>
                    </ul>
                    <div class="right-btn">
                        <span class="isfalse pointer">取消</span>
                        <span class="isture pointer" id="addMuban">添加</span>
                    </div>
                </div>
                <!-- 手工输入框界面  -->
                <div class="editBox none" id="editBox1">
                    <h2>手工输入框</h2>
                    <div>
                        <ul>
                            <li>
                                <p>标题<span>标题文字不超过16个字符</span></p>
                                <input class="form-control is" type="text" placeholder="请输入标题">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>内容<span>标题文字不超过16个字符</span></p>
                                <input class="form-control" type="text" placeholder="请输入标题">
                            </li>
                                <li class="heng"><!-- 这是横线 --></li>
                        </ul>
                    </div>
                    <div class="right-btn">
                        <span class="isfalse pointer">取消</span>
                        <span class="isture pointer" id="addedit1" >添加</span>
                    </div> 
                </div>
                <!-- 选项框输入框界面  -->
                <!--  <div class="editBox none" id="editBox2">
                    <h2>选项输入框</h2>
                    <div>
                        <ul> 
                            <p>标题<span>标题文字不超过16个字符</span></p>
                            <input class="form-control is" type="text" placeholder="请输入标题
                            </li>
                            <li class="heng"></li>
                            <li>
                                <p>选项内容</p>
                                <input class="form-control" type="text" placeholder="请输入内容">
                            </li>
                            <li class="heng"></li>
                        </ul>
                    </div>
                    <div class="right-btn">
                        <span class="isfalse pointer">取消</span>
                        <span class="isture pointer" id="addedit">添加</span>
                    </div> 
                </div> -->
                <!-- 含单位输入框界面 -->
                <div class="editBox none" id="editBox3">
                    <h2>含单位输入框</h2>
                    <div>
                        <ul>
                            <li>
                                <p>标题<span>标题文字不超过16个字符</span></p>
                                <input class="form-control is" type="text" placeholder="请输入标题">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>内容<span>内容文字不超过16个字符</span></p>
                                <input class="form-control" type="text" placeholder="请输入内容">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>单位<span>单位字符不超过2个字符</span></p>
                                <input class="form-control" type="text" placeholder="请输入单位">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                        </ul>
                    </div>
                    <div class="right-btn">
                        <span class="isfalse pointer">取消</span>
                        <span class="isture pointer" id="addedit3">添加</span>
                    </div> 
                </div>
                <!-- 价格体系输入框界面  -->
                <div class="editBox none" id="editBox4">
                    <h2>价格体系输入框</h2>
                    <div>
                        <ul>
                            <li>
                                <p>标题<span>标题文字不超过16个字符</span></p>
                                <input class="form-control is" type="text" placeholder="请输入标题">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>价格<span>价格文字不超过6个字符</span></p>
                                <input class="form-control" type="text" placeholder="请输入金额">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>价格单位<span>单位可以是美金、英镑、日元、元…</span></p>
                                <input class="form-control" type="text" placeholder="请输入单位">
                            </li>
                            <li>
                                <p>价格体系<span>价格体系可以是时间、长度、重量…</span></p>
                                <input class="form-control" type="text" placeholder="请输入体系">
                            </li>
                        </ul>
                    </div>
                    <div class="right-btn">
                        <span class="isfalse pointer">取消</span>
                        <span class="isture pointer" id="addedit4">添加</span> 
                    </div> 
                </div>
                <!-- 硬件编辑输入框界面  -->
                <div class="editBox none" id="editBox5">
                    <h2>价格体系输入框</h2>
                    <div>
                        <ul>
                            <li>
                                <p>标题<span>标题文字不超过16个字符</span></p>
                                <input class="form-control is" type="text" placeholder="请输入标题">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>价格<span>价格文字不超过6个字符</span></p>
                                <input class="form-control" type="text" placeholder="请输入金额">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>价格单位<span>单位可以是美金、英镑、日元、元…</span></p>
                                <input class="form-control" type="text" placeholder="请输入单位">
                            </li>
                            <li>
                                <p>价格体系<span>价格体系可以是时间、长度、重量…</span></p>
                                <input class="form-control" type="text" placeholder="请输入体系">
                            </li>
                        </ul>
                    </div>
                    <div class="right-btn">
                        <span class="isfalse pointer">取消</span>
                        <span class="isture pointer" id="addedit5">添加</span>
                    </div> 
                </div>
                <!-- 硬件编辑输入框界面  -->
                <div class="editBox none" id="editBox6">
                    <h2>价格体系输入框</h2>
                    <div>
                        <ul>
                            <li>
                                <p>标题<span>标题文字不超过16个字符</span></p>
                                <input class="form-control is" type="text" placeholder="请输入标题">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>价格<span>价格文字不超过6个字符</span></p>
                                <input class="form-control" type="text" placeholder="请输入金额">
                            </li>
                            <li class="heng"><!-- 这是横线 --></li>
                            <li>
                                <p>价格单位<span>单位可以是美金、英镑、日元、元…</span></p>
                                <input class="form-control" type="text" placeholder="请输入单位">
                            </li>
                            <li>
                                <p>价格体系<span>价格体系可以是时间、长度、重量…</span></p>
                                <input class="form-control" type="text" placeholder="请输入体系">
                            </li>
                            <li>
                                <p>价格体系<span>价格体系可以是时间、长度、重量…</span></p>
                                <input class="form-control" type="text" placeholder="请输入体系">
                            </li>
                        </ul>
                    </div>
                    <div class="right-btn">
                        <span class="isfalse pointer">取消</span>
                        <span class="isture pointer" id="addedit6">添加</span>
                    </div> 
                </div>         
            </div> 
        </el-col>
    </el-row>
</template>

<script>
   	export default {
		data() {
			return {
                round:true,
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                        value: 'yizhi',
                        label: '一致'
                        }, {
                        value: 'fankui',
                        label: '反馈'
                        }, {
                        value: 'xiaolv',
                        label: '效率'
                        }, {
                        value: 'kekong',
                        label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                        }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                        }]
                    }]
                    }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                        }, {
                        value: 'color',
                        label: 'Color 色彩'
                        }, {
                        value: 'typography',
                        label: 'Typography 字体'
                        }, {
                        value: 'icon',
                        label: 'Icon 图标'
                        }, {
                        value: 'button',
                        label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                        }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                        }, {
                        value: 'input',
                        label: 'Input 输入框'
                        }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                        }, {
                        value: 'select',
                        label: 'Select 选择器'
                        }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                        }, {
                        value: 'switch',
                        label: 'Switch 开关'
                        }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                        }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                        }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                        }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                        }, {
                        value: 'upload',
                        label: 'Upload 上传'
                        }, {
                        value: 'rate',
                        label: 'Rate 评分'
                        }, {
                        value: 'form',
                        label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                        value: 'table',
                        label: 'Table 表格'
                        }, {
                        value: 'tag',
                        label: 'Tag 标签'
                        }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                        }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                        }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                        }, {
                        value: 'badge',
                        label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                        }, {
                        value: 'loading',
                        label: 'Loading 加载'
                        }, {
                        value: 'message',
                        label: 'Message 消息提示'
                        }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                        }, {
                        value: 'notification',
                        label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                        }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                        }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                        }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                        }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                        }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                        }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                        }, {
                        value: 'card',
                        label: 'Card 卡片'
                        }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                        }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                        }]
                    }]
                    }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
                form: {
                    pName: '123',
                   
                }
            }
             
		},
		methods: {
			
		}
	}
</script>
        
<style scoped lang="scss">
	@import '~scss_vars';
    // 面包条样式
    .content-.container .main .content-container{
        padding: 0 !important;
    }

    .Breadcrumb{
        height: 54px;
        line-height: 54px;
        padding-left: 25px;
        border-bottom: 1px solid #DBDBDB;
    }
    .productBox{
        position: relative;
        margin: 20px;   
        background: #fff;
        padding: 20px;
        .weiduBox .el-input{
            width: 200px;
        }
        .addwd{
            position: absolute;
            right:10%;
            top:42px;
            width: 280px;
            height: 68px;
            border: 10px solid rgba(243,244,245,0.5);
            color: rgba(77,123,254,1);
                text-align: center;
                line-height: 48px;
        }
        .weiduBox{
            border: 1px solid #DBDBDB;
            margin-bottom: 20px;
            padding: 20px 0 0 30px;
            .norms{
                position: relative;
                background:rgba(243,244,245,0.46);
                margin: 14px 30px 30px 0;
                padding-bottom:30px; 
                padding-top:30px;
                .addwd2{
                    position: absolute;
                    right:9%;
                    top:24px;
                    width: 28%;
                    height: 48px;
                    background: #fff;
                    color: rgba(77,123,254,1);
                    text-align: center;
                    line-height: 48px;
                }
                .norms-wd{
                    overflow: hidden;
                }
                .addwd3{
                    width: 410px;
                    height: 48px;
                    margin:10px 0 10px 32px;	 
                    background: #fff;
                    color: rgba(77,123,254,1);
                    text-align: center;
                    line-height: 48px;	
                }
                .norms-jg{
                    overflow: hidden;		
                }
            }
        }
    }

</style>
